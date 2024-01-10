import React from "react";

function Heading() {
  let greetings;
  //js object
  const customStyles = {
    color: "",
    fontSize: "30px",
    borderBottom: "5px solid black",
  };

  const pokemonName = "Pikachu";
  const date = new Date(2018, 2, 8, 2); // new Date(2019, 1, 2, 7);
  const currentTime = date.getHours();

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

  return <h1 style={customStyles}>{greetings}</h1>;
}

export default Heading;
