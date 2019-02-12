import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './editor/editor.js';
import Preview from './preview/preview.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div> Markdown previewer</div>
        <Editor/>
        <Preview/>


      </div>
    );
  }
}

export default App;
