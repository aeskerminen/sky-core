import React from "react";


export default class Drawboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            c_width: props.width,
            c_height: props.height
        }
    }

    render() {
        return(
            <div className="p-2 bg-slate-100 w-full">
            </div>
        )
    }
}