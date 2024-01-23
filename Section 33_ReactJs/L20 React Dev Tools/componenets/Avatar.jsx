import React from "react";
import crew from "./crew.json";

function Avatar(props) {
  return (
    <img className="circle-img" src={props.crew[0].img} alt="profilePic" />
  );
}

export default Avatar;
