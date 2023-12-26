//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";

const fname = "Superman";
const lname = "Forever";

const copyRightSymbol = "\u00A9";

// Create a new Date object
const currentDate = new Date();

// Get various components of the current date
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {`${fname} ${lname}`}</p>
    <p>{`${copyRightSymbol} Copyright: ${year}`}</p>
  </div>,
  document.getElementById("root")
);
