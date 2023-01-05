import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PDFViewer from "./components/widgets/PDFViewer";
import Drawboard from "./components/widgets/Drawboard";

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

function writeNoteData(userId, selection, content, name) {
  update(ref(db, "users/" + userId + "/notes/" + selection), {
    selection: selection,
    content: content,
    name: name,
  });
}

function deleteNoteData(userId, selection) {
  remove(ref(db, "users/" + userId + "/notes/" + selection), null);
}

// DATABASE

const App = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const [notes, setNotes] = useState([]);
  const [ready, setReady] = useState(false);

  const [selection, setSelection] = useState("");
  const [name, setName] = useState("");

  const [toDelete, setToDelete] = useState("");

  const [html, setHtml] = useState("Notes...");

  const [displayPDF, setDisplayPDF] = useState(false);
  const [displayDrawboard, setDisplayDrawboard] = useState(false);

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
                name: json["name"],
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
    <div className="h-full bg-slate-500">
      {isAuthenticated && ready && (
        <div className="h-full flex flex-col overflow-y-hidden">
          <Navbar></Navbar>
          <div className="flex flex-row flex-grow p-1 overflow-hidden">
            <div className="w-1/6">
              <Sidebar
                selectButtonClick={(name, id) => {
                  setSelection(id);
                  setName(name);
                }}
                dbDeleteNotes={(val) => {
                  setToDelete(val);
                }}
                notes={notes}
              ></Sidebar>
            </div>
            <div className="w-5/6 bg-slate-300 flex-1 overflow-y-auto p-2">
              {selection !== "" && (
                <div>
                  <DefaultEditor
                    value={html}
                    onChange={(e) => {
                      setHtml(e.target.value);
                      writeNoteData(user.sub, selection, html, name);
                    }}
                  />
                  <PDFViewer className="" displayPDF={displayPDF} />
                  <Drawboard displayDrawboard={displayDrawboard} />
                  <div className="">
                    <button
                      id="pdfbtn"
                      title="PDF Viewer"
                      className=""
                      onClick={() => {
                        setDisplayPDF(!displayPDF);
                        const elem = document.getElementById("pdfbtn");

                        elem.innerHTML === "+"
                          ? (elem.innerHTML = "-")
                          : (elem.innerHTML = "+");
                      }}
                    >
                      +
                    </button>

                    <button
                      id="drawboardbtn"
                      title="Drawboard"
                      className="block"
                      onClick={() => {
                        setDisplayDrawboard(!displayDrawboard);
                        const elem = document.getElementById("drawboardbtn");

                        elem.innerHTML === "+"
                          ? (elem.innerHTML = "-")
                          : (elem.innerHTML = "+");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
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
