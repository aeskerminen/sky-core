import React, { useState, useMemo } from "react";

// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Text } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'


const TextEditor = () => {
    const [editor] = useState(() => withReact(createEditor()))

    const initialValue = useMemo(
        () =>
            JSON.parse(localStorage.getItem('content')) || [
                {
                    type: 'paragraph',
                    children: [{ text: 'A line of text in a paragraph.' }],
                },
            ],
        []
    )

    return (
        <Slate
            editor={editor}
            value={initialValue}
            onChange={value => {
                const isAstChange = editor.operations.some(
                    op => 'set_selection' !== op.type
                )
                if (isAstChange) {
                    // Save the value to Local Storage.
                    const content = JSON.stringify(value)
                    localStorage.setItem('content', content)
                }
            }}>
            <Editable />
        </Slate>
    )
}


export default TextEditor