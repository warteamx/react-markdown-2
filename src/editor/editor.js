import React, { Component } from 'react';
import './editor.css';

class Editor extends Component {
constructor(props) {
  super(props);
  this.state ={value: ''};
  this.handleChange = this.handleChange.bind(this)
}

handleChange(event) {
  this.setState({value: event.target.value})
}

  render() {
    return (
      <textarea id="editor" value={this.state.value} onChange={this.handleChange}>

      </textarea>
      
    );
  }
}

export default Editor;
