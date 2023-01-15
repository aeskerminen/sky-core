import React from "react";
import { X_ICON } from "../../helpers/icons";

const Note = (props) => {
  function handleRemoveButtonClick() {
    props.removeButtonClick(props.id);
  }

  function handleSelectButtonClick() {
    props.selectButtonClick(props.name, props.id);
  }

  let classAttrs = props.selected
    ? "flex flex-col mr-1 ml-1 bg-slate-400 hover:bg-slate-400 space-y-2 shadow-md rounded-lg"
    : "flex flex-col mr-1 ml-1 bg-slate-100 hover:bg-slate-300 space-y-2 shadow-md rounded-lg";

  return (
    <div className={classAttrs}>
      <button onClick={handleSelectButtonClick} className="m-1 p-1">
        <div className="flex flex-row items-center">
          <span
            className="font-normal tracking-normal overflow-ellipsis whitespace-nowrap overflow-hidden"
            style={{ maxWidth: "25ch" }}
          >
            {props.name}
          </span>
          <button
            onClick={handleRemoveButtonClick}
            className="bg-white hover:bg-red-400 active:bg-gray-10 p-2 ml-auto rounded-full"
          >
            <X_ICON></X_ICON>
          </button>
        </div>
      </button>
    </div>
  );
};

export default Note;
