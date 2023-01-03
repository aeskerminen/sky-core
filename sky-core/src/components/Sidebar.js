import React from "react";
import Note from "./notes/Note";

let idCounter = "0";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      input_state: "",
      selected: "",
    };

    console.log(this.state.notes);

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this);
  }

  addNote(note) {
    this.setState((state) => ({
      notes: [...state.notes, note],
      input_state: state.input_state,
      selecetd: state.selected,
    }));
  }

  removeNote(note) {
    console.log(note);

    this.setState((state) => ({
      notes: state.notes.filter((_note) => {
        return _note.id !== note.id;
      }),
      input_state: state.input_state,
      selecetd: state.selected,
    }));

    this.props.dbDeleteNotes(note.id);
  }

  handleInputChange(event) {
    this.setState((state) => ({
      notes: state.notes,
      input_state: event.target.value,
      selecetd: state.selected,
    }));
  }

  handleSelectButtonClick(name, id, key) {
    this.setState((state) => ({
      notes: state.notes,
      input_state: state.input_state,
      selected: key,
    }));

    this.props.selectButtonClick(name, id);
  }

  render() {
    return (
      <div className="flex flex-col bg-slate-300 h-full m-2 p-1 mr-1 shadow-md overflow-hidden">
        <div className=" flex items-center p-1.5 bg-white">
          <input
            onChange={this.handleInputChange.bind(this)}
            className="placeholder:text-slate-400 block w-full mr-2 bg-white border 
                    border-black rounded-lg py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:ring-1 
                    sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />

          <button
            onClick={() => {
              idCounter += 1;
              this.addNote({
                name: this.state.input_state,
                id: idCounter,
              });
            }}
            className="p-2 bg-white rounded-lg ml-auto hover:bg-slate-100"
          >
            ADD
          </button>
        </div>
        <div className="grow flex flex-col p-2 gap-3 bg-white overflow-y-scroll">
          {this.state.notes.map((note) => (
            <Note
              key={note.id}
              selected={note.id === this.state.selected}
              selectButtonClick={this.handleSelectButtonClick}
              removeButtonClick={this.removeNote}
              id={note.id}
              name={note.name}
            ></Note>
          ))}
        </div>
      </div>
    );
  }
}
