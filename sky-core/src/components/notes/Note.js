import React from "react";


function tag() {
    return(
        <div className="py-2 mr-1 bg-slate-100 rounded-full p-1 shadow-sm">
            <span className="mr-1.5 ml-1.5">MAA13</span>
        </div>
    )
}

export default class Note extends React.Component {
    render() {
        return(
            <div className="flex flex-col p-2 bg-slate-100 space-y-2">
                <div>
                    <span className="font-medium tracking-normal">MAA13 muistiinpanot</span>
                </div>
                <div className="border border-t-2 border-t-black"></div>
                <div className="rounded-lg bg-white p-1.5">
                    <div className="flex flex-row overflow-x-hidden">
                        {tag()}
                        {tag()}
                        {tag()}
                        {tag()}
                        {tag()}
                    </div>
                </div>
            </div>
        )
    }
}