import React from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';

import Editor from './Editor';
import NoteExplorer from './NoteExplorer';



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
        <div className="container py-2 flex items-center max-w-full bg-slate-600 shadow" style={{ height: '6%' }}>
          <div className='container max-w-fit p-2 m-2 rounded'>
            <h1 className='font-sans font-bold text-white text-xl tracking-widest drop-shadow'>SKY NOTES</h1>
          </div>
        </div>
        <div className='p-1' style={{ height: '94%' }}>
          <div className='grid grid-cols-5 gap-2 h-full'>
            <NoteExplorer selecetdCallback={this.getSelectedNote.bind(this)}></NoteExplorer>
            <div className='col-span-2 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto p-2'>
              <Editor className='h-full' selected={this.state.selectedNote} value={""} ></Editor>
            </div>
            <div className='col-span-2 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto p-2'>
              <ReactSketchCanvas className='p-2 h-full'
                style={{
                  border: "0.075rem solid #000000",
                  borderRadius: "0.25rem"
                }}
                width="400"
                height="900"
                strokeWidth={4}
                strokeColor="red"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
