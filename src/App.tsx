import React from 'react';
import logo from './Octocat.png';
import './App.css';
import Input from "./components/input";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Search for Github users:
      </header>
        <section>
            <Input/>
        </section>
    </div>
  );
}

export default App;
