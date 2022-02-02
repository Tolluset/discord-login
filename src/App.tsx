import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use code:
          <br />
          <code>{code}</code>
          <br />
          to finish the authorizing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
