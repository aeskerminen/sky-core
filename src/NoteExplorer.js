import React from "react";
import { randomId } from '@mantine/hooks';

import Note from "./Note";

export default class NoteExplorer extends React.Component {

    constructor(props) {
        super(props)

        const x = randomId()

        this.state = {
          searchState: '',
          noteList: [],
          selectedNote: ''
        }
    }

    addNote() {
        const n_id = randomId()
        this.setState((state) => ({
            searchState: state.searchState,
            noteList: [...state.noteList, { name: '', content: 'YEET', id: n_id }],
            selectedNote: n_id
        }))
        this.props.selecetdCallback(this.state.selectedNote)
    }

    handleSelect(val) {
        this.setState((state) => ({
            searchState: state.searchState,
            noteList: [...state.noteList],
            selectedNote: val
        }))
        this.props.selecetdCallback(this.state.selectedNote)
    }

    handleSearch(e) {
        this.setState((state) => ({
            searchState: state.searchState,
            noteList: state.noteList.sort((b, a) => {
                // Sort results by matching name with keyword position in name
                if (a.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > b.name.toLowerCase().indexOf(e.target.value.toLowerCase()))
                    return 1;
                else if (a.name.toLowerCase().indexOf(e.target.value.toLowerCase()) < b.name.toLowerCase().indexOf(e.target.value.toLowerCase()))
                    return -1;
                else
                    if (a.name > b.name) return 1; else return -1;
            })
        }))
    }

    getContent() {
        const note = this.state.noteList.filter(note => {
          return note.id === this.state.selectedNote
        })
    
        console.log(note[0].content)
        return note[0].content
    }

    render() {
        return (
            <div className='col-span-1 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto'>
                <div className='flex flex-nowrap flex-row p-2'>
                    <input onChange={this.handleSearch.bind(this)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 mr-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                    </input>
                    <button onClick={this.addNote.bind(this)} className="bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        +
                    </button>
                </div>
                <div className='flex flex-nowrap flex-col'>
                    {this.state.noteList.map(note => <Note handleSelect={this.handleSelect.bind(this)} selected={this.state.selectedNote === note.id ? true : false} key={note.id} id={note.id} name={note.name}></Note>)}
                </div>
            </div>
        )
    }
}