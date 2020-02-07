import React from 'react';
import logo from './Octocat.png';
import './App.css';
import GithubSearch from "./organisms/GithubSearch";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Search for Github users:
      </header>
        <section>
          <GithubSearch/>
        </section>
    </div>
  );
}

export default App;
