import React from "react";

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
    this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this);
  }

  handleRemoveButtonClick() {
    this.props.removeButtonClick({
      name: this.props.name,
      id: this.props.id,
      content: this.props.content,
    });
  }

  handleSelectButtonClick() {
    this.props.selectButtonClick(this.props.id, this.props.name, this.props.id);
  }

  render() {
    if (this.props.selected) console.log("SELECTED");

    let classAttrs = this.props.selected
      ? "flex flex-col mr-1 ml-1 bg-slate-400 space-y-2 shadow-md"
      : "flex flex-col mr-1 ml-1 bg-slate-100 space-y-2 shadow-md";

    return (
      <div className={classAttrs}>
        <button
          onClick={this.handleSelectButtonClick}
          className="bg-slate-200 hover:bg-slate-300 active:bg-slate-400 m-1 p-1"
        >
          <div className="flex flex-row items-center">
            <span className="font-normal tracking-normal">
              {this.props.name}
            </span>
            <button
              onClick={this.handleRemoveButtonClick}
              className="bg-white hover:bg-gray-50 active:bg-gray-10 px-3 py-1 ml-auto rounded-full"
            >
              x
            </button>
          </div>
        </button>
      </div>
    );
  }
}
