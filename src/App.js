import React from 'react'

import Editor from './Editor';
import Note from './Note';

import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { ReactSketchCanvas } from 'react-sketch-canvas';

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
    if(d.name === id) {
      r = d.content
    }
  });

  arr.push(r)

  console.log(arr)
}

const arr = []

class App extends React.Component {
  

  render() {
    return(
      <div className='h-screen'>
      <div className="container py-2 flex items-center max-w-full bg-slate-600 shadow" style={{height: '6%'}}>
        <div className='container max-w-fit p-2 m-2 rounded'>
          <h1 className='font-sans font-bold text-white text-xl tracking-widest drop-shadow'>SKY NOTES</h1>
        </div>
      </div>
      <div className='p-1' style={{height: '94%'}}>
        <div className='grid grid-cols-5 gap-2 h-full'>
          <div className='col-span-1 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto'>
          <div className='flex flex-nowrap flex-row p-2'>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 mr-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
            </input>
            <button class="bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              +
            </button>
          </div>
            <div className='flex flex-nowrap flex-col'>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
              <Note name={'MAA12 Kpl 3.1'}></Note>
            </div>
          </div>
          <div className='col-span-2 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto p-2'>
                <Editor className='h-full' value={"val"}></Editor>
          </div>
          <div className='col-span-2 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto p-2'>
                <ReactSketchCanvas className='p-2 h-full'
                  style={{
                    border: "0.075rem solid #000000",
                    borderRadius: "0.25rem"}}
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
