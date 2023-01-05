import React, { useState } from "react";
import Note from "./notes/Note";

import { v4 as uuidv4 } from "uuid";

const Sidebar = (props) => {
  let [notes, setNotes] = useState(props.notes);

  let [input, setInput] = useState("");
  let [selected, setSelected] = useState("");

  function addNote(note) {
    setNotes((notes = [...notes, note]));
  }

  function removeNote(note) {
    console.log(note);

    setNotes(
      (notes = notes.filter((_note) => {
        return _note.id !== note.id;
      }))
    );

    props.dbDeleteNotes(note.id);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleSelectButtonClick(name, id, key) {
    setSelected(key);
    props.selectButtonClick(name, id);
  }

  return (
    <div className="flex flex-col bg-slate-300 h-full p-2 shadow-md overflow-hidden">
      <div className=" flex items-center p-1.5 bg-white">
        <input
          onChange={handleInputChange}
          className="placeholder:text-slate-400 block w-full mr-2 bg-white border 
                    border-black rounded-lg py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:ring-1 
                    sm:text-sm"
          placeholder="Search for anything..."
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
          className="p-2 bg-white rounded-lg ml-auto hover:bg-slate-100"
        >
          ADD
        </button>
      </div>
      <div className="grow flex flex-col p-2 gap-3 bg-white overflow-y-scroll">
        {notes.map((note) => (
          <Note
            key={note.id}
            selected={note.id === selected}
            selectButtonClick={handleSelectButtonClick}
            removeButtonClick={removeNote}
            id={note.id}
            name={note.name}
          ></Note>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
