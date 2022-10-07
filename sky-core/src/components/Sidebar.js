import React from "react";
import Note from "./notes/Note";


export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="flex flex-col bg-slate-300 h-full m-2 p-1 mr-1 shadow-md overflow-hidden">
                <div className=" flex items-center p-1.5 bg-white">
                    <input class="placeholder:text-slate-400 block w-full mr-2 bg-white border 
                    border-black rounded-lg py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:ring-1 
                    sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    
                    <button className="p-2 bg-white rounded-lg ml-auto hover:bg-slate-100">ADD</button>
                </div>
                <div className="grow flex flex-col p-2 gap-3 bg-white">
                    <Note></Note>
                    <Note></Note>
                    <Note></Note>
                    <Note></Note>
                </div>
            </div>
        )
    }
}