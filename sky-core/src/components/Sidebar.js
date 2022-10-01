import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="flex flex-col bg-slate-300 h-full p-2 gap-1 shadow-md overflow-hidden">
                <div className=" flex items-center p-1.5 bg-white">
                    <input class="placeholder:text-slate-400 block w-full mr-2 bg-white border 
                    border-black rounded-lg py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:ring-1 
                    sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    
                    <button className="p-2 bg-white rounded-lg ml-auto hover:bg-slate-100">ADD</button>
                </div>
                <div className="grow flex flex-col overflow-y-scroll scroll p-2 gap-2 bg-white">
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                    <span className="block py-20 bg-slate-100">NOTE</span>
                </div>
            </div>
        )
    }
}