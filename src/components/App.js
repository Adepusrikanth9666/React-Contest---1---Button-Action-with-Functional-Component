import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [change, setChange] = useState(false);
  const handleClick = () => {
    setChange(!change);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      {change ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
