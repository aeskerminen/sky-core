import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="bg-blue-500 h-full">
                <div className="flex items-center p-2 bg-blue-700">
                    <input class="placeholder:text-slate-400 block w-full mr-2 bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-3 
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Search for anything..." type="text" name="search"/>
                    
                    <button className="p-2 bg-white rounded-lg ml-auto">ADD</button>
                </div>
            </div>
        )
    }
}