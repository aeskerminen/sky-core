import React from 'react';
import CanvasDraw from 'react-canvas-draw'

export default class Drawboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            c_width: props.width,
            c_height: props.height,
            displayDrawboard: props.displayDrawboard
        }
    }

    render() {
        console.log(this.state.displayDrawboard);
        if (this.state.displayDrawboard){
        return(
            <div className="p-2 bg-slate-100 w-full">
                 <CanvasDraw canvasWidth={this.state.c_width} canvasHeight={this.state.c_height}></CanvasDraw> 
            </div>
        )
    }
    }
}
