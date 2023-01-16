import React, { useState } from "react";
import Note from "./notes/Note";

import { v4 as uuidv4 } from "uuid";
import { PLUS_ICON } from "../helpers/icons";

const Sidebar = (props) => {
  let [notes, setNotes] = useState(props.notes);

  let [input, setInput] = useState("");
  let [selected, setSelected] = useState("");

  function addNote(note) {
    setNotes((notes = [...notes, note]));
  }

  function handleRemoveButtonClick(id) {
    setNotes(
      (notes = notes.filter((_note) => {
        return _note.id !== id;
      }))
    );

    props.dbDeleteNotes(id);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleSelectButtonClick(name, id) {
    props.selectButtonClick(name, id);
    setSelected(id);
  }

  return (
    <div className="flex flex-col h-full overflow-hidden p-2 bg-white">
      <div className=" flex items-center p-1.5 bg-blue-500 mb-2 rounded-md shadow">
        <input
          onChange={handleInputChange}
          className="placeholder:text-slate-400 block w-full mr-2 bg-white
                    rounded-lg py-2 pl-3 pr-3 focus:outline-none focus:ring-1 
                    sm:text-sm"
          placeholder="Name your note..."
          type="text"
          name="search"
        />

        <button
          onClick={() => {
            addNote({
              name: input,
              id: uuidv4(),
            });
          }}
          className="p-2 bg-white rounded-md ml-auto hover:bg-slate-200 active:bg-slate-300"
        >
          <PLUS_ICON></PLUS_ICON>
        </button>
      </div>
      <div
        className="grow flex flex-col p-1 gap-3 bg-white overflow-y-scroll"
        style={{ caretColor: "transparent" }}
      >
        {notes.map((note) => (
          <Note
            key={note.id}
            selected={note.id === selected}
            selectButtonClick={handleSelectButtonClick}
            removeButtonClick={handleRemoveButtonClick}
            id={note.id}
            name={note.name}
          ></Note>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
