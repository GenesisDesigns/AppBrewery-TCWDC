import React from "react";
import "../src/styles.css";

function Card(props) {
  return (
    <div className="cardContainer">
      <img src={props.src} alt="CharacterProfile" />
      <h2>{props.name}</h2>
      <p>
        <span>#: </span>
        {props.phone}
      </p>
      <p>
        <span>Email: </span>
        {props.email}
      </p>
    </div>
  );
}
export default Card;
