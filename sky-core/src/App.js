import React, {useState, useRef} from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Drawboard from "./components/widgets/Drawboard";
import PDFViewer from "./components/widgets/PDF/PDFViewer";


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
        <button className="" onClick={() => setDisplayPDF(!displayPDF)}>+</button>
        </div>
        <div>
          <Drawboard displayDrawboard={displayDrawboard}/>
        </div>
        <div>
          <button className="" onClick={() => {setDisplayDrawboard(!displayDrawboard); console.log(displayDrawboard);}}>++</button>
        </div>
      </div>
        </div>
      
      

    </div>
  );
}

export default App;
