import React from "react";
import "../src/styles.css";

function Footer() {
  let currentYear = new Date().getFullYear();

  //   console.log(currentYear);
  return (
    <footer>
      <p>© Protected by copyright @ {currentYear} </p>
    </footer>
  );
}

export default Footer;
