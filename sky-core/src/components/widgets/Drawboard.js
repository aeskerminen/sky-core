import React from "react";
import CanvasDraw from "react-canvas-draw";
import { CompactPicker } from "react-color";

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
  handleChangeComplete = (color) => {
    this.setState({ brushColor: color.hex });
  };

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
          <div>
            <div className="flex flex-row gap-x-4 mt-2 pb-2">
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
                  /*
localStorage.setItem(
"savedDrawing",
this.modify.getDataURL()
); */
                  var a = document.createElement("a");
                  a.href = this.modify.getDataURL();
                  a.download = "Drawing.png";
                  a.click();
                }}
              >
                SAVE
              </button>
            </div>

            <div className="p-2 bg-white shadow-md rounded-md">
              <input
                style={{ accentColor: this.state.brushColor }}
                className="align-middle w-44"
                value={this.state.brushRadius}
                type="range"
                min="1"
                max="50"
                onChange={(e) => {
                  this.setState({
                    brushRadius: e.target.value,
                  });
                }}
                title={this.state.brushRadius}
              />
              <span className="pl-2.5">{this.state.brushRadius}</span>
            </div>
          </div>
          <div>
            <CompactPicker
              color={this.state.brushColor}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}
