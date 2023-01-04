import React, { useState } from 'react'
import { Document, Page, Outline } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [content, setContent] = useState(0);
  // const [rotation, setRotation] = useState(0);

 {/* async function getTheFile() {
    // open file picker
    let [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    setContent(URL.createObjectURL(fileData));
  }
*/}


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function goToPage(){

    let toChangePage = Number(document.getElementById('userinput').value);

    if ( !isNaN(toChangePage) && toChangePage <= numPages){
    setPageNumber(toChangePage);
    }
  
}
  // function rotatePDFClockWise(){
  //   document.getElementById("Document Page").className = 'rotate-90';
  // }
if(props.displayPDF){ // hidden or visible
  return (
    <div>
      
      <input
      type="file"
      accept=".pdf"
      class="hidden"
      id="pdffile"
      onChange={(e) => {
           const file = e.target.files[0];
           const reader = new FileReader();
           reader.readAsDataURL(file);
           reader.onload = () => {
            setContent(reader.result);
      }}}/>
      <label className="cursor-grab" for="pdffile"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <title>Upload PDF</title>
          <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
          <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
      </svg></label>
      <p>
        Page&nbsp;
        <input class="border mb-2"
        id='userinput' 
        type="text" 
        size="1"
        onChange={goToPage}
        value={pageNumber || (numPages ? 1 : "--")}
        />
        of {numPages || "--"}
      </p> 
      <div>
        <button type="button" className="mt-2 mr-2 bg-black text-white border-none w-20 cursor-pointer shadow-md" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button type="button" className="bg-black text-white border-none w-20 cursor-pointer shadow-md" disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </button>
      </div>
    {/* <button onClick={rotatePDFClockWise}>Rotate</button> */}
    <Document className="mt-5"
    file={content}
    onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page id="Document Page" className=""
      renderAnnotationLayer={false} 
      pageNumber={pageNumber} 
      />

    </Document>
    </div>
  );
}
} 