import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none">
        <Navbar></Navbar>
      </div>
      <div className="grow w-1/6">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
