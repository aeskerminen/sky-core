import React from 'react'

import Editor from './Editor';

import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

async function getCities(db) {
  const citiesCol = collection(db, 'notes');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  // return cityList;
  console.log(cityList)
}


class Note extends React.Component {
  render() {
    return(
      <div className='bg-white rounded p-3 m-2 drop-shadow flex-1 divide-y'>
        <div className='flex mb-2'>
          <h1 className='py-2 inline-flex'>{this.props.name}</h1>
          
          <div className="inline-flex items-center ml-auto px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500  transition ease-in-out duration-150" disabled="">
            <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <button type='button' className="inline-flex items-center ml-2 px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500  transition ease-in-out duration-150" disabled="">
            Select
          </button>
        </div>
        <p>Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className='h-screen'>
      <div className="container py-2 flex items-center max-w-full bg-slate-600 shadow" style={{height: '6%'}}>
        <div className='container max-w-fit p-2 m-2 rounded'>
          <h1 className='font-sans font-bold text-white text-xl tracking-widest drop-shadow'>SKY NOTES</h1>
        </div>
        <div className="flex flex-row-reverse">
          {/* <div className="container bg-white rounded max-w-fit mx-2 p-2 my-0 drop-shadow-lg">
            <p className='font-mono inline'>Notes</p>
          </div>
          <div className="container bg-white rounded max-w-fit mx-2 p-2 my-0 drop-shadow-lg">
            <p className='font-mono inline'>Study</p>
          </div>
          <div className="container bg-white rounded max-w-fit mx-2 p-2 my-0 drop-shadow-lg">
            <p className='font-mono inline'>Settings</p>
          </div> */}
        </div>
      </div>
      <div className='p-1' style={{height: '94%'}}>
        <div className='grid grid-cols-5 gap-2 h-full'>
          <div className='col-span-1 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto'>
            <div className='flex flex-nowrap flex-col'>
              <Note name={'MAA12 Kpl 3.1'}></Note>
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
          <div className='col-span-4 bg-slate-200 rounded drop-shadow-lg no-scrollbar overflow-y-auto p-2'>
                <Editor></Editor>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
