import React, {useState, useRef} from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


import Drawboard from "./components/widgets/Drawboard";


function App() {
  return (
    <div className="h-screen flex flex-col bg-slate-500 overflow-hidden">
      <div className="flex-none">
        <Navbar></Navbar>
      </div>
      <div className="h-screen flex flex-row">
        <div className="grow w-1/6 overflow-hidden mb-2.5">
          <Sidebar></Sidebar>
        </div>
        <div className="grow w-5/6 overflow-hidden m-2 mr-2 mb-2.5 p-1 bg-white">
          <Drawboard width={window.innerWidth * 0.818} height={500}></Drawboard>
        </div>
      </div>

    </div>
  );
}

export default App;
