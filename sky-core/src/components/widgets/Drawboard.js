import React from "react";
import CanvasDraw from "react-canvas-draw";

export default class Drawboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c_width: props.width,
      c_height: props.height,
      brushColor: "#3B82F6",
      brushRadius: 5,
    };
  }

  render() {
    if (this.props.displayDrawboard) {
      return (
        <div className="p-2 bg-slate-100 w-full">
          <CanvasDraw
            ref={(canvasDraw) => (this.modify = canvasDraw)}
            canvasWidth={this.state.c_width}
            canvasHeight={this.state.c_height}
            brushColor={this.state.brushColor}
            brushRadius={this.state.brushRadius}
            hideGrid={true}
            enablePanAndZoom={true}
          />
          <div>
            <button
              className="pr-10"
              onClick={() => {
                this.modify.undo();
              }}
            >
              UNDO
            </button>
            <button
              onClick={() => {
                this.modify.eraseAll();
              }}
            >
              CLEAR
            </button>

            <input
              className="block"
              value={this.state.brushRadius}
              type="range"
              min="2"
              max="50"
              onChange={(e) => {
                this.setState({
                  brushRadius: e.target.value,
                });
              }}
            />
          </div>
          <div>
            {/* <label>Color picker</label> */}
            <input
              type="color"
              value={this.state.brushColor}
              onChange={(e) => {
                this.setState({
                  brushColor: e.target.value,
                });
              }}
            />
          </div>
        </div>
      );
    }
  }
}
