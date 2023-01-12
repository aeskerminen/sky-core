import React from "react";
import CanvasDraw from "react-canvas-draw";

export default class Drawboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c_width: "200",
      c_height: props.height,
      brushColor: "#3B82F6",
      brushRadius: 5,
    };
  }
  render() {
    return (
      <div className="p-2 mt-2 bg-slate-100 relative">
        <CanvasDraw
          ref={(canvasDraw) => (this.modify = canvasDraw)}
          canvasWidth={this.state.c_width}
          canvasHeight={this.state.c_height}
          brushColor={this.state.brushColor}
          brushRadius={this.state.brushRadius}
          hideGrid={true}
          enablePanAndZoom={false}
        />
        <div className="flex flex-row justify-center gap-x-4 mt-2 items-center">
          <button
            className="p-2 bg-white shadow-md rounded-md"
            onClick={() => {
              this.modify.undo();
            }}
          >
            UNDO
          </button>
          <button
            className="p-2 bg-white shadow-md rounded-md"
            onClick={() => {
              this.modify.eraseAll();
            }}
          >
            CLEAR
          </button>
          <button
            className="p-2 bg-white shadow-md rounded-md"
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.modify.getDataURL()
              );
              var a = document.createElement("a");
              a.href =
              localStorage.getItem("savedDrawing");
              a.download = "Drawing.png";
              a.click();
            }}
          >
            SAVE
          </button>

          <div className="p-2 bg-white shadow-md rounded-md">
            <input
              className="align-middle"
              value={this.state.brushRadius}
              type="range"
              min="2"
              max="50"
              onChange={(e) => {
                this.setState({
                  brushRadius: e.target.value,
                });
              }}
              title={this.state.brushRadius}
            />
          </div>
          <div className="p-2 bg-white shadow-md rounded-md">
            <input
              className="align-middle"
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
      </div>
    );
  }
}
