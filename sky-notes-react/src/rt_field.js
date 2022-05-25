// KaTeX dependency
import katex from "katex";
import "katex/dist/katex.css";


// Quill dependency
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// MathQuill dependency
import "./jquery"
import "./mathquill-0.10.1/mathquill"
import "react-mathquill/dist/react-mathquill";

// mathquill4quill include
import mathquill4quill from "mathquill4quill"
import "./mathquill4quill.css";

// demo page
import React from "react";

window.katex = katex;

export default class RTField extends React.Component {
  reactQuill = React.createRef();

  componentDidMount() {
    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex });
    enableMathQuillFormulaAuthoring(
      this.reactQuill.current.editor,
      this.props.options
    );
  }

  render() {
    return (
      <ReactQuill
        ref={this.reactQuill}
        id="editor"
        modules={{
          formula: true,
          toolbar: [["video", "bold", "italic", "underline", "formula"]]
        }}
        placeholder="Type text here, or click on the formula button to enter math."
        theme="snow"
      />
    );
  }
}