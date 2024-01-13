import React from "react";
import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <Card
        src={
          "https://cdn.staticneo.com/w/gta5/thumb/Michael.png/280px-Michael.png"
        }
        name={"Michael De Santas"}
        phone={"713-629-5481"}
        email={"mds@vice.com"}
      />
    </div>
  );
}

export default App;
