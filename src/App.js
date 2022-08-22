import React from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import Editor from './Editor';
import NoteExplorer from './NoteExplorer';



const firebaseConfig = {
  apiKey: "AIzaSyBnYWP06n84p_vLSQpUPYdIapnhyh2H9Zw",
  authDomain: "skm2022-3667a.firebaseapp.com",
  projectId: "skm2022-3667a",
  storageBucket: "skm2022-3667a.appspot.com",
  messagingSenderId: "163232549889",
  appId: "1:163232549889:web:8bf0aa897e1f9eb01e4400"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getNote(db, id) {
  const notesCol = collection(db, 'notes');
  const noteSnapshot = await getDocs(notesCol);

  let r = ''

  const noteList = noteSnapshot.docs.forEach(element => {
    const d = element.data()
    if (d.name === id) {
      r = d.content
    }
  });

  arr.push(r)

  console.log(arr)
}

const arr = []

class App extends React.Component {
  constructor(props) {
    super(props)
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
            <NoteExplorer></NoteExplorer>
            <div className='col-span-2 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto p-2'>
              <Editor className='h-full' value={""}></Editor>
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
