import React, {useState, useRef} from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Drawboard from "./components/widgets/Drawboard";
import PDFViewer from "./components/widgets/PDF/PDFViewer";
import Timer from "./components/widgets/Timer.js";
import Stopwatch from "./components/widgets/Stopwatch";


function App() {
  const [displayPDF, setDisplayPDF] = useState(false);
  const [displayDrawboard, setDisplayDrawboard] = useState(false);

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
          <div className="flex-none">
            <PDFViewer displayPDF={displayPDF}/>
          </div>
          <div className="">
        <button id="pdfbtn" title="PDF Viewer" className="" onClick={() => {
            setDisplayPDF(!displayPDF);
            document.getElementById("pdfbtn").innerHTML === "+" ? 
            document.getElementById("pdfbtn").innerHTML = "-" :
            document.getElementById("pdfbtn").innerHTML = "+" ;
          }}>+</button>
        
        </div>
        <div>
          <Drawboard displayDrawboard={displayDrawboard}/>
        </div>
        <div>
          <button id="drawboardbtn" title="Drawboard" className="" onClick={() => {
            setDisplayDrawboard(!displayDrawboard);
            document.getElementById("drawboardbtn").innerHTML === "+" ? 
            document.getElementById("drawboardbtn").innerHTML = "-" :
            document.getElementById("drawboardbtn").innerHTML = "+" ;
          }}>+</button>
        </div>
      </div>
        </div>
      
      

    </div>
  );
}

export default App;
