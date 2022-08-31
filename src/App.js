import React from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';

import Editor from './Editor';
import NoteExplorer from './NoteExplorer';

import { AiFillBook } from 'react-icons/ai'
import Sidebar from './Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedNote: ''
    }
  }

  getSelectedNote(id) {
    this.setState(() => ({
      selectedNote: id
    }))
  }

  render() {
    return (
      <div className='h-screen'>
        <Sidebar></Sidebar>
        
      </div>
    )
  }
}

export default App;
