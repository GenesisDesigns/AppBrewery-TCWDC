//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";

const fname = "Kratos";
const lname = "ChainBlades";

const randomInt = Math.floor(Math.random() * 30) + 1;
console.log(randomInt);

ReactDOM.render(
  <div>
    {/* <h1>The almighty God of War, {fname + " " + lname}!</h1> */}

    {/* template literals or string interpolation*/}
    <h1>The almighty God of War, {`${fname} ${lname}`}!</h1>
    <h2>Power Level {randomInt + randomInt}</h2>
  </div>,
  document.getElementById("root")
);
