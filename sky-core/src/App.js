import React, { useState, useMemo, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import LoginPage from "./components/login/LoginPage";

import { useAuth0 } from "@auth0/auth0-react";
import { DefaultEditor } from "react-simple-wysiwyg";

// DATABASE
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, update, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnYWP06n84p_vLSQpUPYdIapnhyh2H9Zw",
  authDomain: "skm2022-3667a.firebaseapp.com",
  projectId: "skm2022-3667a",
  storageBucket: "skm2022-3667a.appspot.com",
  messagingSenderId: "163232549889",
  appId: "1:163232549889:web:8bf0aa897e1f9eb01e4400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function writeNoteData(userId, selection, content) {
  update(ref(db, "users/" + userId + "/notes/" + selection), {
    selection: selection,
    content: content,
  });
}

function deleteNoteData(userId, selection) {
  remove(ref(db, "users/" + userId + "/notes/" + selection), null);
}

// DATABASE

const App = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [selection, setSelection] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);
  const [ready, setReady] = useState(false);
  const [toDelete, setToDelete] = useState("");

  const [html, setHtml] = useState("Notes...");

  useEffect(() => {
    if (user !== undefined) {
      deleteNoteData(user.sub, toDelete);
      setSelection("");
    }
  }, [toDelete]);

  useEffect(() => {
    if (user !== undefined) {
      get(ref(db, `users/${user.sub}/notes/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const temp = [];

            snapshot.forEach((val) => {
              const json = val.val();
              temp.push({
                name: json["selection"],
                id: json["selection"],
              });
            });

            setNotes((arr) => [...arr, ...temp]);
            setReady(true);
          } else {
            console.log("No data available");
            setReady(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user !== undefined && selection !== "") {
      get(ref(db, `users/${user.sub}/notes/${selection}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // LOAD DATA FROM DATABASE
            setHtml(snapshot.val()["content"]);
            setName(snapshot.val()["name"]);
          } else {
            console.log("No data available");
            setHtml("");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selection]);

  return (
    <div className="h-screen flex flex-col bg-slate-500 overflow-hidden">
      {isAuthenticated && ready && (
        <div>
          <div className="flex-none">
            <Navbar></Navbar>
          </div>
          <div className="h-screen flex flex-row">
            <div className="grow w-1/6 overflow-hidden mb-2.5">
              <Sidebar
                selectButtonClick={(id, name) => {
                  setSelection(id);
                  setName(name);
                }}
                notes={notes}
                dbDeleteNotes={(val) => {
                  setToDelete(val);
                  console.log(toDelete);
                }}
              ></Sidebar>
            </div>
            <div className="grow w-5/6 overflow-y-scroll m-2 mr-2 mb-2.5 p-1 bg-white">
              {selection !== "" && (
                <DefaultEditor
                  value={html}
                  onChange={(e) => {
                    setHtml(e.target.value);
                    console.log(user.sub, selection, html);

                    writeNoteData(user.sub, selection, html);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {!isAuthenticated && <LoginPage></LoginPage>}
    </div>
  );
};

export default App;
