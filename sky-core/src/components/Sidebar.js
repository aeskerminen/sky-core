import React from "react";
import Note from "./notes/Note";


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: ['MAA13', 'MAA14'],
            input_state: ''
        }

        this.addNote.bind(this)
    }

    addNote(_name) {
        this.setState(((state) => ({
            notes: [...state.notes, _name]
        })));
    }

    handleInputChange(event) {
        this.setState(((state) => ({
            notes: state.notes,
            input_state: event.target.value
        })));
    }

    render() {
        return(
            <div className="flex flex-col bg-slate-300 h-full m-2 p-1 mr-1 shadow-md overflow-hidden">
                <div className=" flex items-center p-1.5 bg-white">
                    <input onChange={this.handleInputChange.bind(this)} class="placeholder:text-slate-400 block w-full mr-2 bg-white border 
                    border-black rounded-lg py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:ring-1 
                    sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    
                    <button onClick={() => { this.addNote(this.state.input_state) }} className="p-2 bg-white rounded-lg ml-auto hover:bg-slate-100">ADD</button>
                </div>
                <div className="grow flex flex-col p-2 gap-3 bg-white overflow-y-scroll">
                    {this.state.notes.map((name) => <Note name={name}></Note>)}
                </div>
            </div>
        )
    }
}