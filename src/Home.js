import React from "react";

import { ReactSketchCanvas } from 'react-sketch-canvas';

import Editor from './Editor';
import NoteExplorer from './NoteExplorer';

export default class Home extends React.Component {
    render() {
        return (

            <div className='p-2' style={{ height: '100%', gridColumn: 'span 31 / span 31' }}>
                <div className='grid grid-cols-2 gap-2 h-full w-full'>
                    <div className='col-span-1 bg-slate-200 rounded no-scrollbar overflow-y-auto p-2'>
                        <Editor selected={null} value={""} ></Editor>
                    </div>
                    <div className='col-span-1 bg-slate-200 rounded no-scrollbar overflow-y-auto p-2'>
                        <ReactSketchCanvas className='p-2 h-full'
                            width="600"
                            height="900"
                            strokeWidth={4}
                            strokeColor="red"
                        />
                    </div>
                </div>
            </div>
        )
    }
}