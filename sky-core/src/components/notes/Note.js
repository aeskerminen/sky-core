import React from "react";

const Note = (props) => {
  function handleRemoveButtonClick() {
    props.removeButtonClick(props.id);
  }

  function handleSelectButtonClick() {
    props.selectButtonClick(props.name, props.id);
  }

  let classAttrs = props.selected
    ? "flex flex-col mr-1 ml-1 bg-slate-400 hover:bg-slate-300 space-y-2 shadow-md rounded-lg"
    : "flex flex-col mr-1 ml-1 bg-slate-100 hover:bg-slate-300 space-y-2 shadow-md rounded-lg";

  return (
    <div className={classAttrs}>
      <button onClick={handleSelectButtonClick} className="m-1 p-1">
        <div className="flex flex-row items-center">
          <span className="font-normal tracking-normal">{props.name}</span>
          <button
            onClick={handleRemoveButtonClick}
            className="bg-white hover:bg-red-400 active:bg-gray-10 p-2 ml-auto rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
      </button>
    </div>
  );
};

export default Note;
