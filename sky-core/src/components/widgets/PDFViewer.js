import React, { useState, useEffect } from "react";
import { Document, Page, Outline } from "react-pdf/dist/esm/entry.webpack";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer() {
  //current pdf document
  const [content, setContent] = useState(null);
  //hook for the number of pages of the current document
  const [numPages, setNumPages] = useState(null);
  //hook for the current page
  const [pageNumber, setPageNumber] = useState(null);
  //hook for the rotation of the page
  const [rotation, setRotation] = useState(0);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <title>Upload PDF</title>
            <path
              fill-rule="evenodd"
              d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
            />
          </svg>
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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Document
          className="shadow-md p-1"
          onItemClick={handleItemClick}
          rotate={rotation}
          file={content}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page renderAnnotationLayer={true} pageNumber={pageNumber} />
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
