import React from "react";

export default class Navbar extends React.Component {
    
    render() {
        return(
            <div className="flex items-center p-3 bg-blue-500 shadow-lg">
                <div className="flex mr-auto">
                    <button type="button">
                        <svg viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="15" rx="5" fill="white"></rect>
                            <rect y="30" width="100" height="15" rx="5" fill="white"></rect>
                            <rect y="60" width="100" height="15" rx="5" fill="white"></rect>
                        </svg>
                    </button>
                    
                </div>
                <div className="flex items-center flex-shrink-1 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-2xl tracking-normal">DEV BUILD</span>
                </div>
                <div className="flex ml-auto">
                    <button type="button" className="button bg-blue-700 text-white rounded-xl pt-2 pb-2 pl-4 pr-4">
                        <span className="font-semibold text-base tracking-wide">Kerminen</span>
                    </button>
                </div>
            </div>
        )
    }
}