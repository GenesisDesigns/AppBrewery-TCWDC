//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";

let greetings;

//js object
const customStyles = {
  color: "",
  fontSize: "30px",
  borderBottom: "5px solid black",
};

const pokemonName = "Pikachu";
const date = new Date(2019, 1, 2, 7);
const currentTime = date.getHours();

console.log(date);

if (currentTime >= 0 && currentTime < 12) {
  greetings = `Good Morning ${pokemonName}, it's ${currentTime}:00 O'clock`;
  customStyles.color = "red";
} else if (currentTime >= 12 && currentTime < 18) {
  greetings = `Good Afternoon ${pokemonName}, it's ${currentTime}:00 O'clock`;
  customStyles.color = "green";
} else {
  greetings = `Good Evening ${pokemonName}, it's ${currentTime}:00 O'clock`;
  customStyles.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyles}>{greetings}</h1>
  </div>,
  document.getElementById("root")
);


