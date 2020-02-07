import React from 'react';
import logo from './Octocat.png';
import './App.css';
import InputField from "./components/InputField";
import throttle from "./utils/debounce";

const App = () => {

  const handleInputChange = throttle((value: string) => {
    console.log(value)
  }, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Search for Github users:
      </header>
        <section>
            <InputField onChange={handleInputChange}/>
        </section>
    </div>
  );
}

export default App;
