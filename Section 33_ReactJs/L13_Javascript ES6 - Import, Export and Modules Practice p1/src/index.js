//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";

// import pi, { doublePi, triplePi } from "./math.js";
import * as pi from "./math.js"; // * (wildcard) imports everything from math.js as "pi"

// console.log(pi); // if console.log(pi), pi is an object in the terminal

// import App from "../components/App";

ReactDOM.render(
  <div>
    <ul>
      <li>{pi.default}</li>
      {/* doublePi, triplePi are functions */}
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
