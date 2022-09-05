import React from "react";

function note() {
    return(
        <div>HELLO</div>
    )
}

export default class Books extends React.Component {
    render() {
        return(
            <div className='' style={{ height: '100%', gridColumn: 'span 31 / span 31' }}>
                <div className="h-full grid grid-rows-2 p-2 gap-2">
                    <div className="p-2 bg-slate-300">
                        dsd
                    </div>
                    <div className="p-2 bg-slate-300">
                        sdsad
                    </div>
                </div>
            </div>
        )
    }
}