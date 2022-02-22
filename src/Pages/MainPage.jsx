import React from "react";
import Header from "../Components/Header/Header";
import Free from "../Components/Free/Free";
import Womens from "../Components/Womens/Womens";
import Mens from "../Components/Mens/Mens";
import Collection from "../Components/Collection/Collection";
import Blog from "../Components/Blog/Blog";
import Subscribe from "../Components/Subscribe/Subscribe";
import SeeBtn from "../Components/SeeBtn/SeeBtn";
import WomensBtn from "../Components/WomensBtn/WomensBtn";
import MensBtn from "../Components/MensBtn/MensBtn";

function MainPage() {
  return (
    <div data-test-id="app">
      <Header />
      <Free />
      <WomensBtn />
      <Womens />
      <SeeBtn />
      <MensBtn />
      <Mens />
      <SeeBtn />
      <Collection />
      <Subscribe />
      <Blog />
    </div>
  );
}

export default MainPage;
