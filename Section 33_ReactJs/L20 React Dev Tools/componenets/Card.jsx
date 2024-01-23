import React from "react";
import "../public/styles.css";

function Card(props) {
  return (
    <div className="cardContainer">
      <div className="keyId">{props.id}</div>
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
