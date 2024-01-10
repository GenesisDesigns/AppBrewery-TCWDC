// Old way to import from react

// var React = require("react");
// var ReactDOM = require("react-dom");

// ReactDOM.render(
//   <h1>Hello World</h1>, 
//   document.getElementById("root"))
// ;


// New Way to import reactModule:

// import React from "react";
// import ReactDOM from "react-dom";



// OtherWays to import reactModule: StrictMode

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


// This code React:
// // ReactCode
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// Is the same as this code in Javascript:

// // JavascriptCode
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);


//oldWay Import ReactDOM
//var React = require("react");
//var ReactDOM = require("react-dom");

//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";

//var h1 = document.createElement("h1");
//h1.innerHTML = "Hello World!";
//document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);