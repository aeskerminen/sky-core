import React from "react";

const Note = (props) => {
  function handleRemoveButtonClick() {
    props.removeButtonClick(props.id);
  }

  function handleSelectButtonClick() {
    props.selectButtonClick(props.name, props.id);
  }

  let classAttrs = props.selected
    ? "flex flex-col mr-1 ml-1 bg-slate-400 space-y-2 shadow-md"
    : "flex flex-col mr-1 ml-1 bg-slate-100 space-y-2 shadow-md";

  return (
    <div className={classAttrs}>
      <button
        onClick={handleSelectButtonClick}
        className="bg-slate-200 hover:bg-slate-300 active:bg-slate-400 m-1 p-1"
      >
        <div className="flex flex-row items-center">
          <span className="font-normal tracking-normal">{props.name}</span>
          <button
            onClick={handleRemoveButtonClick}
            className="bg-white hover:bg-gray-50 active:bg-gray-10 px-3 py-1 ml-auto rounded-full"
          >
            x
          </button>
        </div>
      </button>
    </div>
  );
};

export default Note;
