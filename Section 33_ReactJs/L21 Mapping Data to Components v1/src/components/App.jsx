import React from 'react';
import Header from "./Header.jsx";
import {CreateCard, Card} from "./Card.jsx";
import crew from "./crew.json";



function App() {
  return (
    <>
      <Header />
      {/* {crew.map(CreateCard)} */}
            <Card 
        id={1}
        img={"https://cdn.staticneo.com/w/gta5/thumb/Michael.png/280px-Michael.png"}
        name={"Miachel De Santas"}
        contact={"713-629-5481"}
        email={"mds@vice.com"}
      />

      <Card 
        id={2}
        img={"https://www.giantbomb.com/a/uploads/scale_medium/5/56742/2478164-2751857776.jpg"}
        name={"Franklin Clinton"}
        contact={"862-947-5189"}
        email={"FcMobster@vice.com"}
      />

      <Card 
        id={3}
        img={"https://static.tvtropes.org/pmwiki/pub/images/trevorphilipsgtav.jpg"}
        name={"Trevor Philips"}
        contact={"Walkie Talkie"}
        email={"TevorP@vice.com"}
      />

      <Card 
        id={4}
        img={"https://www.techspot.com/images2/news/bigimage/2022/07/2022-07-27-image-8.jpg"}
        name={"GtaGirl1"}
        contact={"987-216-2013"}
        email={"GtaGirl1@vice.com"}
      />

      <Card 
        id={5}
        img={"https://wallpapers.com/images/hd/gta-background-girl-blowing-a-kiss-loading-screen-oabuh4zjid48ivxg.jpg"}
        name={"GtaGirl2"}
        contact={"415-345-5971"}
        email={"GtaGirl2@vice.com"}
      />

        
    </>

  );
}

export default App;
