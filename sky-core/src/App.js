import React, { useState, useMemo, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import LoginPage from "./components/login/LoginPage";

import { useAuth0, withAuth0 } from "@auth0/auth0-react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [editor] = useState(() => withReact(createEditor()));
  const [selection, setSelection] = useState("0");

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
    editor.children = JSON.parse(localStorage.getItem(selection));
    editor.onChange();
  }, [selection]);

  return (
    <div className="h-screen flex flex-col bg-slate-500 overflow-hidden">
      {isAuthenticated && (
        <div>
          <div className="flex-none">
            <Navbar></Navbar>
          </div>
          <div className="h-screen flex flex-row">
            <div className="grow w-1/6 overflow-hidden mb-2.5">
              <Sidebar
                selectButtonClick={(id) => {
                  setSelection(id);
                }}
              ></Sidebar>
            </div>
            <div className="grow w-5/6 overflow-y-scroll m-2 mr-2 mb-2.5 p-1 bg-white">
              <Slate
                editor={editor}
                value={initialValue}
                onChange={(value) => {
                  const isAstChange = editor.operations.some(
                    (op) => "set_selection" !== op.type
                  );
                  if (isAstChange) {
                    // Save the value to Local Storage.
                    const content = JSON.stringify(value);
                    localStorage.setItem(selection, content);
                  }
                }}
              >
                <Editable />
              </Slate>
            </div>
          </div>
        </div>
      )}
      {!isAuthenticated && <LoginPage></LoginPage>}
    </div>
  );
};

export default withAuth0(App);
