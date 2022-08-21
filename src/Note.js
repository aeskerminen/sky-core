import React from "react"

export default class Note extends React.Component {
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
            <button type='button' onClick={() => {}} className="inline-flex items-center ml-2 px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500  transition ease-in-out duration-150" disabled="">
              Select
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet</p>
        </div>
      )
    }
  }