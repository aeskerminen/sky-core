import React from "react";


function tag() {
    return(
        <div className="py-2 mr-2 mb-1 bg-white rounded-full shadow-sm">
            <span className="mr-2 ml-2">MAA13</span>
        </div>
    )
}

export default class Note extends React.Component {

    constructor(props) {
        super(props)

        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this)
    }

    handleRemoveButtonClick() { 
        this.props.removeButtonClick({name: this.props.name, id: this.props.id, content: this.props.content})
    }

    render() {
        return(
            <div className="flex flex-col p-2 mr-1 ml-1 bg-slate-100 space-y-2 shadow-md">
                <div className="flex flex-row items-center">
                    <span className="font-normal tracking-normal">{this.props.name}</span>
                    <button onClick={this.handleRemoveButtonClick} className="bg-white hover:bg-gray-50 active:bg-gray-100 border border-black px-3 py-1 ml-auto rounded-full">x</button>
                </div>
                <div className="border border-t-2 border-t-black"></div>
                <div className="">
                    <div className="flex flex-row overflow-x-hidden">
                        {tag()}
                        {tag()}
                        {tag()}
                        {tag()}
                        {tag()}
                    </div>
                </div>
            </div>
        )
    }
}