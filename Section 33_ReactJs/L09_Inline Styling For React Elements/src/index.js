//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";

//js object
const customStyles = {
  color: "blue",
  fontSize: "50px",
  border: "5px solid black",
};

//update js object without changing the code in the render()
customStyles.color = "red";

ReactDOM.render(
  <div>
    <h1 style={customStyles}>Hello world</h1>
  </div>,
  document.getElementById("root")
);
