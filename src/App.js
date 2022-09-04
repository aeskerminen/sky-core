import React from 'react'
import Sidebar from './Sidebar';

import { Routes, Route, Link } from "react-router-dom";

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
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='books' element={<Books/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
