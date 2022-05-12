import React, {Component, PropTypes} from 'react';
import Draggable from 'react-draggable';
import RichTextEditor from 'react-rte';

class RTField extends Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
      <Draggable>
        <div className='box'>
          <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          />
        </div>
      </Draggable>
    );
  }
}

export default RTField;
