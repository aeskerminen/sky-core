import React from "react";

function note() {
    return (
        <div>HELLO</div>
    )
}

function tag() {
    return(
        <div>TAG</div>
    )
}

class Note extends React.Component {
    render() {
        return(
            <div className="bg-white p-2 m-2">
                <div className="bg-slate-100 mb-2 pl-2">
                    <h1>BOOK</h1>
                    <p>Description</p>
                </div>
                <div className="flex gap-x-2 bg-slate-100 pl-2">
                    {tag()}
                    {tag()}
                    {tag()}
                </div>
            </div>
        )
    }
}

export default class Books extends React.Component {
    render() {
        return (
            <div className='' style={{ height: '100%', gridColumn: 'span 31 / span 31' }}>
                <div className="h-full grid grid-cols-8 p-2 gap-2">
                    <div className="bg-slate-300 col-span-1">
                        <div className='flex flex-nowrap flex-row p-2'>
                            <input type="text" className="bg-gray-50 border text-gray-900 mr-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Search" required>
                            </input>
                            <button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">+</button>
                        </div>
                        <div className="bg-slate-300">
                            <Note></Note>
                            <Note></Note>
                            <Note></Note>
                            <Note></Note>
                            <Note></Note>
                        </div>
                    </div>
                    <div className="p-2 bg-slate-300 col-span-7">
                        sdsad
                    </div>
                </div>
            </div>
        )
    }
}