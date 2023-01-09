// Core React imports
import React, { useState, useEffect } from "react";

// Bigger components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Widgets
import PDFViewer from "./components/widgets/PDFViewer";
import Drawboard from "./components/widgets/Drawboard";

// Text editor
import { DefaultEditor } from "react-simple-wysiwyg";

// Authentication
import LoginPage from "./components/login/LoginPage";
import { useAuth0 } from "@auth0/auth0-react";

// Database
import { get, ref } from "firebase/database";
import { db, deleteNoteData, writeNoteData } from "./DatabaseWrapper";

const App = () => {
  // State for tracking auth status
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  // State for holding note data retrieved from server and boolean for loading status
  const [notes, setNotes] = useState([]);
  const [ready, setReady] = useState(false);

  // Selection ID and name for current note (saving reasons)
  const [selection, setSelection] = useState("");
  const [name, setName] = useState("");

  // State for the selection ID of the note to be deleted
  const [toDelete, setToDelete] = useState("");

  // Holds data from the WYSIWYG editor
  const [html, setHtml] = useState("Notes...");

  // Booleans for displaying the two widgets
  const [displayPDF, setDisplayPDF] = useState(false);
  const [displayDrawboard, setDisplayDrawboard] = useState(false);

  // Hook that listens for a change in toDelete. Handles deletion of notes.
  useEffect(() => {
    if (user !== undefined) {
      deleteNoteData(user.sub, toDelete);
      setSelection("");
    }
  }, [toDelete]);

  // Hooks that listens for change in auth state. Handles loading note data for the Sidebar.
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

  // Hooks that listens for change in selection. Handles loading notes from databse to WYSIWYG to be edited
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
      {!isAuthenticated && <LoginPage></LoginPage>}
      {isAuthenticated && ready && (
        <div className="h-full flex flex-col overflow-y-hidden">
          <Navbar></Navbar>
          <div className="flex flex-row flex-grow overflow-hidden">
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
            <div
              className="w-5/6 bg-white overflow-y-scroll p-2 m-2 mb-3"
              style={{ caretColor: "transparent" }}
            >
              {selection === "" && (
                <div className="bg-white p-2 pb-3 h-full text-center">
                  <h1 className="text-xl">Please select or create a note...</h1>
                </div>
              )}
              {selection !== "" && (
                <div style={{ caretColor: "black" }}>
                  <DefaultEditor
                    value={html}
                    onChange={(e) => {
                      setHtml(e.target.value);
                      writeNoteData(user.sub, selection, e.target.value, name);
                    }}
                  />
                  {displayDrawboard && (
                    <Drawboard
                      width={"200"}
                      displayDrawboard={displayDrawboard}
                    ></Drawboard>
                  )}

                  {displayPDF && <PDFViewer />}

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
    </div>
  );
};

export default App;
