//NewWay Import ReactModule
import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";

const gamePosters = [
  "https://videogames.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNjAwNTg5MDA2NTEzNjQ4/god-of-war-ragnarok-kratos.jpg",
  "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/a6b49ab3-56d5-428b-89b5-bcc5a0ac1b8b/Grandtheftauto1x1+2.png",
  "https://store-images.s-microsoft.com/image/apps.53783.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.6d60329c-2f2a-4ac9-9dd3-2f132d5c3b6c",
];

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Games</h1>
    <div className="img-container">
      <img src={gamePosters[0]} alt="Kratos, God of War 3" />
      <img src={gamePosters[1]} alt="GTA Cupertino" />
      <img src={gamePosters[2]} alt="AssassinsCreed Odyssey" />
    </div>
  </div>,
  document.getElementById("root")
);
