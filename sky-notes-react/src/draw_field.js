import React from 'react'
import Draggable from 'react-draggable';
import CanvasDraw from "react-canvas-draw";



function DrawField () {
    const defaultProps = {
      onChange: null,
      loadTimeOffset: 5,
      lazyRadius: 15,
      brushRadius: 6,
      brushColor: "#444",
      catenaryColor: "#0a0302",
      gridColor: "rgba(150,150,150,0.17)",
      hideGrid: true,
      canvasWidth: 500,
      canvasHeight: 500,
      disabled: false,
      imgSrc: "",
      saveData: null,
      immediateLoading: false,
      hideInterface: false,
      gridSizeX: 50,
      gridSizeY: 50,
      gridLineWidth: 10,
      hideGridX: false,
      hideGridY: false,
      enablePanAndZoom: false,
      mouseZoomFactor: 0.01,
      zoomExtents: { min: 0.33, max: 3 },
    };
      return (
            <CanvasDraw {...defaultProps}></CanvasDraw>
    );
}

export default DrawField;