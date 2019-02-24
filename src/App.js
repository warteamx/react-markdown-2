import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Markdown from './markdown/markdown';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React App
      </header>

        <Markdown/>

    </div>
      );
    }
    
    export default App;
