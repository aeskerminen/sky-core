import React, { useState, useEffect } from "react";
import { Document, Page, Outline } from "react-pdf/dist/esm/entry.webpack";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { PAGE_ICON, ROTATE_ICON, UPLOAD_ICON } from "../../helpers/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer() {
  //hook for current pdf document
  const [content, setContent] = useState(null);
  //hook for the number of pages of the current document
  const [numPages, setNumPages] = useState(null);
  //hook for the current page
  const [pageNumber, setPageNumber] = useState(null);
  //hook for the rotation of the page
  const [rotation, setRotation] = useState(0);
  //hook for dual page view
  const [showSecondPage, setShowSecondPage] = useState(false);

  //changes pageinput to the right page as pageNumber updates
  useEffect(() => {
    document.getElementById("pageinput").value = pageNumber;
  }, [pageNumber]);

  //when a new pdf-file is rendered
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  //basic page navigation functions
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  //updates pageNumber hook to pageinput if it is valid
  function goToPage() {
    let toChangePage = Number(document.getElementById("pageinput").value);
    if (toChangePage >= 1 && !isNaN(toChangePage) && toChangePage <= numPages) {
      setPageNumber(toChangePage);
    }
  }

  //handle for internal links
  function handleItemClick(props) {
    setPageNumber(props.pageNumber);
  }

  //clears pageinput when it is clicked
  function clearPageInput() {
    document.getElementById("pageinput").value = "";
  }

  //sets pageinput to pageNumber when it loses focus
  function setPageInput() {
    document.getElementById("pageinput").value = pageNumber;
  }

  //sets the correct rotation for the page when the button is clicked
  function rotatePDFClockWise() {
    rotation < 270
      ? setRotation((prevRotation) => prevRotation + 90)
      : setRotation(0);
  }

  return (
    <div className="p-2 bg-slate-100 mt-1 flex flex-col items-center gap-y-2">
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept=".pdf"
          id="pdffile"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              setContent(reader.result);
            };
          }}
        />
        <label
          className="cursor-grab bg-white p-2 shadow-md rounded-md"
          htmlFor="pdffile"
        >
          <UPLOAD_ICON></UPLOAD_ICON>
        </label>
      </div>

      <div className="flex flex-row gap-x-2 justify-center">
        <button
          type="button"
          className="p-2 bg-white cursor-pointer shadow-md rounded-md"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          {"<"}
        </button>
        <button
          type="button"
          className="p-2 bg-white cursor-pointer shadow-md rounded-md"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          {">"}
        </button>
        <button
          type="button"
          className="p-2 bg-white cursor-pointer shadow-md rounded-md"
          onClick={rotatePDFClockWise}
          title="Rotate"
        >
          <ROTATE_ICON></ROTATE_ICON>
        </button>
        <button
          type="button"
          className="p-2 bg-white cursor-pointer shadow-md rounded-md"
          onClick={() => setShowSecondPage(!showSecondPage)}
          title="Toggle Dual Page"
        >
          <PAGE_ICON></PAGE_ICON>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Document
          className="shadow-md p-1"
          onItemClick={handleItemClick}
          rotate={rotation}
          file={content}
          onLoadSuccess={onDocumentLoadSuccess}
          Outline={true}
        >
          <div className="flex flex-row">
            <Page renderAnnotationLayer={true} pageNumber={pageNumber} />
            {showSecondPage && pageNumber !== numPages && (
              <Page
                id="secondpage"
                renderAnnotationLayer={true}
                pageNumber={pageNumber + 1}
              />
            )}
          </div>
        </Document>
      </div>
      <div className="text-center flex flex-row items-center gap-x-1">
        <span>Page</span>
        <input
          class="border-2 w-10 "
          id="pageinput"
          type="text"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              goToPage();
            }
          }}
          onFocus={clearPageInput}
          onBlur={setPageInput}
          placeholder={pageNumber || (numPages ? 1 : "--")}
        />
        <span>of {numPages || "--"}</span>
      </div>
    </div>
  );
}
