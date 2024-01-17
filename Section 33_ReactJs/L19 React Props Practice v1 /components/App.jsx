import React from "react";
import Card from "./Card.jsx";
import crew from "./crew.json";
import Header from "./Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Card
        src={crew[0].img}
        name={crew[0].name}
        phone={crew[0].contact}
        email={crew[0].email}
      />
      <Card
        src={crew[1].img}
        name={crew[1].name}
        phone={crew[1].contact}
        email={crew[1].email}
      />
      <Card
        src={crew[2].img}
        name={crew[2].name}
        phone={crew[2].contact}
        email={crew[2].email}
      />
      <Card
        src={crew[3].img}
        name={crew[3].name}
        phone={crew[3].contact}
        email={crew[3].email}
      />
    </div>
  );
}

export default App;
