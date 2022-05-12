import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { addStyles, EditableMathField } from 'react-mathquill'


addStyles()

function LatexField () {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');

    return (
      <Draggable>
          <div className='box'>
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