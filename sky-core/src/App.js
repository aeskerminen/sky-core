// Core React imports
import React, { useState, useEffect } from "react";

// Bigger components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Widgets
import PDFViewer from "./components/widgets/PDFViewer";
import Drawboard from "./components/widgets/Drawboard";

// Authentication
import LoginPage from "./components/login/LoginPage";
import { useAuth0 } from "@auth0/auth0-react";

// Database
import { get, ref } from "firebase/database";
import { db, deleteNoteData, writeNoteData } from "./DatabaseWrapper";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import katex from "katex";
import "katex/dist/katex.min.css";

window.katex = katex;

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

  const [showSidebar, setShowSidebar] = useState(true);

  // Hook that listens for a change in toDelete. Handles deletion of notes.
  useEffect(() => {
    if (user !== undefined) {
      if (toDelete === selection) setSelection("");

      deleteNoteData(user.sub, toDelete);
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

  useEffect(() => {
    if (user !== undefined && selection !== toDelete) {
      writeNoteData(user?.sub, selection, html, name);
    }
  }, [html]);

  return (
    <div className="h-full bg-blue-900">
      {!isAuthenticated && <LoginPage></LoginPage>}
      {isAuthenticated && ready && (
        <div className="h-full flex flex-col overflow-y-hidden">
          <Navbar
            toggleSidebar={() => {
              setShowSidebar(!showSidebar);
            }}
          ></Navbar>
          <div className="flex flex-row flex-grow overflow-hidden">
            <div className={`${showSidebar ? "w-1/6" : "hidden"} p-2 pb-3`}>
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
              className={`${
                showSidebar ? "w-5/6" : "w-full"
              } bg-white overflow-y-scroll p-2 m-2 mb-3 ml-1 rounded-md bound`}
              style={{ caretColor: "transparent" }}
            >
              {selection === "" && (
                <div className="bg-white p-2 pb-3 h-full text-center">
                  <h1 className="text-xl">Please select or create a note...</h1>
                </div>
              )}
              {selection !== "" && (
                <div style={{ caretColor: "black" }}>
                  <ReactQuill
                    theme="snow"
                    value={html}
                    onChange={setHtml}
                    modules={{
                      toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        ["blockquote", "code-block"],

                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        [{ header: [1, 2, 3, false] }],

                        ["link", "image", "formula"],

                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],

                        ["clean"],
                      ],
                    }}
                    bounds={".bound"}
                  />
                  {displayPDF && <PDFViewer />}

                  {displayDrawboard && (
                    <Drawboard
                      width={"200"}
                      displayDrawboard={displayDrawboard}
                    ></Drawboard>
                  )}
                  <div className="flex flex-row justify-center gap-x-2 m-2">
                    <button
                      id="pdfbtn"
                      title="PDF Viewer"
                      className="p-2 bg-white rounded-md shadow-md"
                      onClick={() => {
                        setDisplayPDF(!displayPDF);
                      }}
                    >
                      {!displayPDF && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                          />
                        </svg>
                      )}
                      {displayPDF && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      )}
                    </button>

                    <button
                      id="drawboardbtn"
                      title="Drawboard"
                      className="p-2 bg-white rounded-md shadow-md"
                      onClick={() => {
                        setDisplayDrawboard(!displayDrawboard);
                      }}
                    >
                      {!displayDrawboard && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                          />
                        </svg>
                      )}
                      {displayDrawboard && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      )}
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
