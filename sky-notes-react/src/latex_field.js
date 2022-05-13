import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { addStyles, EditableMathField } from 'react-mathquill'
import m_style from './handle_style';


addStyles()

function LatexField () {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');
    
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