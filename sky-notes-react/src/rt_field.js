// Import React dependencies.
import React, { useState, useCallback, useMemo } from 'react'
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Text } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

import { addStyles, EditableMathField } from 'react-mathquill'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
  {
    type: 'latex',
    children: [{ text: '\n' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) }
    )
  },
}

// Define a React component renderer for our code blocks.
const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

// Define a React component renderer for our LaTeX blocks.
const LatexElement = ({attributes, children, element}) => {
  const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');

  addStyles();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
      <EditableMathField >
        latex={latex}
                onChange={(mathField) => {
                  setLatex(mathField.latex())
                }}
        </EditableMathField>
      </div> 
        {children}
    </div>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

// Define a React component to render leaves with bold text.
const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
} 
  
const RTField = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      case 'latex':
        return <LatexElement {...props}></LatexElement>
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props}></Leaf>
  }, [])

  return(
    <Slate editor={editor} value={initialValue}>
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          Code Block
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            // CustomEditor.toggleLatexBlock(editor)
            // InsertLatex(editor);
          }}
        >
          LaTeX Block
        </button>
      </div>
      <Editable
        editor={editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if(!event.ctrlKey)
            return

          switch(event.key) {
            case "'": {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }
            case 'b': {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
          }
        }}
      ></Editable>
    </Slate>
  );

}

export default RTField;