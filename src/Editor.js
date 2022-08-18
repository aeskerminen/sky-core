import { useState } from "react";
import {RichTextEditor} from '@mantine/rte'
import React from 'react';


export default class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'test_name',
            content: props.value
        }
        
        this.noteChanged = this.noteChanged.bind(this)
    }

    noteChanged(event) {    
        this.setState({
            content: event
        })

        console.log(this.state.content)
        
    }

    render() {
        return(
            // <textarea style={{width: '100%', height: '100%'}} className='rounded p-3 drop-shadow flex-1' onChange={this.noteChanged}></textarea>
            <RichTextEditor sticky={true} value={this.state.content} onChange={this.noteChanged}></RichTextEditor>
        )
    }
}

