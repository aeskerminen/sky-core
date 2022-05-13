import React from 'react'
import Draggable from 'react-draggable';
import CanvasDraw from "react-canvas-draw";
import m_style from './handle_style';


  

function DrawField () {

    return (
      <Draggable>
          <div className='box'>
            <div className='handle' style={m_style}></div>
            <CanvasDraw></CanvasDraw>
          </div>
      </Draggable>
        
    );
}

export default DrawField;