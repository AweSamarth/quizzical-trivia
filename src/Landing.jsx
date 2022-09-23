import React from "react";

export default function Landing(props) {
  return (
    <div id="main-container">
      <div id="top-right-styler"></div>
      <div id="bottom-left-styler"></div>
      <div id="front-els">
        <h1 id="main-heading">Quizzical</h1>
        <h2 id="sub-heading">Can you answer them all?</h2>
        <button onClick={props.setter}>
          Click this button to see the magic happen
        </button>
      </div>
    </div>
  );
}
