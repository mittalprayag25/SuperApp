import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const hitme = () => {
    fetch("http://192.168.1.124:8070/getDetails")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        }
      )
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => hitme()}>Hit me</button>
      </header>
    </div>
  );
}

export default App;
