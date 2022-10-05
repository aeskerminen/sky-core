import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
