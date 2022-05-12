import React, { useState } from 'react'
import Draggable from 'react-draggable';
import CanvasDraw from "react-canvas-draw";


function DrawField () {

    return (
      <Draggable>
          <div className='box'>
            <CanvasDraw></CanvasDraw>
          </div>
      </Draggable>
        
    );
}

export default DrawField;