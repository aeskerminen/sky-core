import React from "react";


export default class Note extends React.Component {

    constructor(props) {
        super(props)

        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this)
        this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this)
    }

    handleRemoveButtonClick() {
        this.props.removeButtonClick({ name: this.props.name, id: this.props.id, content: this.props.content })
    }

    handleSelectButtonClick() {
        this.props.selectButtonClick(this.props.id)
    }



    render() {
        return (
            <div className="flex flex-col mr-1 ml-1 bg-slate-100 space-y-2 shadow-md">
                <button onClick={this.handleSelectButtonClick} className="bg-slate-100 hover:bg-gray-50 active:bg-gray-100 m-1 p-1">
                    <div className="flex flex-row items-center">
                        <span className="font-normal tracking-normal">{this.props.name}</span>
                        <button onClick={this.handleRemoveButtonClick} className="bg-white hover:bg-gray-50 active:bg-gray-100 border border-black px-3 py-1 ml-auto rounded-full">x</button>
                    </div>
                </button>
            </div>
        )
    }
}