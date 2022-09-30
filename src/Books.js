import React from "react";

import Note from "./Note";

function tag() {
    return(
        <div>TAG</div>
    )
}

class Note2 extends React.Component {
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
                <div className="h-full grid grid-cols-8 p-2 gap-2">
                    <div className="bg-slate-600 col-span-1">
                        <div className='flex flex-nowrap flex-row p-2'>
                            <input type="text" className="bg-white border mr-2 text-sm w-full p-2.5" placeholder="Search books..." required/>
                            <button className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white py-2 px-4 border-b-4 border-blue-700">+</button>
                        </div>
                        <div className="bg-slate-600">
                            <Note></Note>
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
        )
    }
}