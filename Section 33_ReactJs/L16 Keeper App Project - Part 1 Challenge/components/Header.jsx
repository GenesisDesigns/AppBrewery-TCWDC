import React from "react";
import "../src/styles.css";

const divBackground = {
  backgroundColor: "#3C43DD",

  padding: "25px 0  25px 30px",
  margin: "0px",
  boxShadow: "0 2px 20px 2px rgba(0, 0, 0, 0.15)",
};

const headerStyle = {
  fontFamily: "Roboto, sansSerif",
  fontWeight: "700",
  fontSize: "2rem",
  color: "white",
};

function Header() {
  return (
    <header style={divBackground}>
      <h1 style={headerStyle}>Keeper App</h1>
    </header>
  );
}

export default Header;
