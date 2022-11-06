import React, {useState} from "react";

import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'

addStyles()

const EditableMathExample = () => {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')
  
    return (
      <div>
        <EditableMathField
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex())
          }}
        />
      </div>
    )
  }

export default class Editor extends React.Component {

    render() {
        return (
            <div>
                <div contentEditable={true} role={"textbox"} className="p-2" style={{width: '100%', height: '500px', whiteSpace: 'pre-line', display: 'inline-block'}}> 
                    <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" width={200} style={{cursor: 'pointer'}}></img>
                </div>
            </div>
        )
    }
}