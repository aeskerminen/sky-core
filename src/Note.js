import React from "react"

export default class Note extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      init: false
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={this.props.selected ? 'border-solid border-2 border-blue-400 bg-white rounded p-3 m-2 drop-shadow flex-1 divide-y' : 'bg-white rounded p-3 m-2 drop-shadow flex-1 divide-y'}>
        <div className='flex mb-2'>
          {this.state.init ? <h1 className='py-2 inline-flex'>{this.state.name}</h1> 
          : <input autoFocus onBlur={({target}) => {if(!this.state.init) { if(target.value.length > 3) {this.setState((state) => ({name: target.value, init: true}))} else target.focus() } }} type="text" id="last_name" className="bg-gray-50 border-2 text-gray-900 mr-2 text-sm rounded-lg block w-full p-2.5"></input>}
          <div className="inline-flex items-center ml-auto px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500  transition ease-in-out duration-150" disabled="">
            <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <button type='button' onClick={() => { this.props.handleSelect(this.props.id) }} className="inline-flex items-center ml-2 px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500  transition ease-in-out duration-150" disabled="">
            Select
          </button>
        </div>
        <p>Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet</p>
      </div>
    )
  }
}