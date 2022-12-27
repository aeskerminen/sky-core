import React, { useState, useMemo, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import LoginPage from "./components/login/LoginPage";

import { useAuth0 } from "@auth0/auth0-react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

// DATABASE
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, set, child, update } from "firebase/database";

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

function writeNoteData(userId, note) {
  const { selection, content } = note;
  update(ref(db, "users/" + userId + "/notes/" + selection), {
    selection: selection,
    content: content,
  });
}

// DATABASE

const App = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [editor] = useState(() => withReact(createEditor()));
  const [selection, setSelection] = useState("0");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);
  const [ready, setReady] = useState(false);

  const initialValue = useMemo(
    () =>
      JSON.parse(localStorage.getItem(selection)) || [
        {
          type: "paragraph",
          children: [{ text: "A line of text in a pa  ragraph." }],
        },
      ],
    [selection]
  );

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
                content: json["content"],
              });
            });

            setNotes((arr) => [...arr, ...temp]);
            setReady(true);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user !== undefined) {
      get(ref(db, `users/${user.sub}/notes/${selection}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            editor.children = JSON.parse(snapshot.val()["content"]);
            setName(snapshot.val()["name"]);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    editor.onChange();
  }, [selection]);

  const EditorComponent = (
    <Slate
      editor={editor}
      value={initialValue}
      onChange={(value) => {
        const isAstChange = editor.operations.some(
          (op) => "set_selection" !== op.type
        );
        if (isAstChange) {
          const content = JSON.stringify(value);
          writeNoteData(user.sub, { selection, content });
        }
      }}
    >
      <Editable />
    </Slate>
  );

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
              ></Sidebar>
            </div>
            <div className="grow w-5/6 overflow-y-scroll m-2 mr-2 mb-2.5 p-1 bg-white">
              {EditorComponent}
            </div>
          </div>
        </div>
      )}
      {!isAuthenticated && <LoginPage></LoginPage>}
    </div>
  );
};

export default App;
