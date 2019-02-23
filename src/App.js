import React from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from './markdown/markdown';
import Drum from './drum/drum';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React App
      </header>
      <Markdown />
 {/* <Drum/> */}
    </div>
  );
}

export default App;
