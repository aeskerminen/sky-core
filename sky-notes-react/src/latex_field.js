import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { addStyles, EditableMathField } from 'react-mathquill'


addStyles()

function LatexField () {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');
    const m_style = {
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor: 'black',
      top: '-1px',
      left: '-1px'
    }              
            
    return (
      <Draggable handle='.handle'>
          <div className='box'>
            <div className='handle' style={m_style}></div>
            <EditableMathField
              latex={latex}
              onChange={(mathField) => {
                setLatex(mathField.latex())
              }}
            />
          </div>
      </Draggable>        
    );
}

export default LatexField;