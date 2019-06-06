import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Future Hendrixx is dropping an album tonight!
        </p>
        <a
          className="App-link"
          href="https://hypebeast.com/2019/6/future-save-me-album-announcement-release-friday"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
