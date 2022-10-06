import React, {useState, useRef} from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import JoditEditor from 'jodit-react';

import Drawboard from "./components/widgets/Drawboard";

function Jodit() {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const config = {
    readonly: false,
    height: 400
  };
  const handleUpdate = (event) => {
    const editorContent = event.target.innerHTML;
    setContent(editorContent);
  };

  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
    </div>
  );
}

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none">
        <Navbar></Navbar>
      </div>
      <div className="h-screen flex flex-row">
        <div className="grow w-1/6 overflow-hidden">
          <Sidebar></Sidebar>
        </div>
        <div className="grow w-5/6 overflow-hidden">
          {Jodit()}
          <Drawboard width={window.innerWidth * 0.825} height={500}></Drawboard>
        </div>
      </div>

    </div>
  );
}

export default App;
