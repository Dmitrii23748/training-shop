import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Free from "../Components/Free/Free";
import Womens from "../Components/Womens/Womens";
import Mens from "../Components/Mens/Mens";
import Collection from "../Components/Collection/Collection";
import Blog from "../Components/Blog/Blog";
import Subscribe from "../Components/Subscribe/Subscribe";
import SeeBtn from "../Components/SeeBtn/SeeBtn";
import SeeBtnMen from "../Components/SeeBtnMen/SeeBtnMen";
import WomensBtn from "../Components/WomensBtn/WomensBtn";
import MensBtn from "../Components/MensBtn/MensBtn";
import { useSelector } from "react-redux";
import Loader from "react-js-loader";
import Footer from "../Components/Footer/Footer";

function MainPage() {
  const PRODUCTS = useSelector((state) => state.products.allProducts);

  const womensMainPageProducts = PRODUCTS.women;
  const mensMainPageProducts = PRODUCTS.men;

  const { status, error } = useSelector((state) => state.products);

  const [categoryWomensMain, setCategoryWomensMain] = useState(
    womensMainPageProducts
  );
  const [categoryMensMain, setcategoryMensMain] =
    useState(mensMainPageProducts);

  const filtersWomensMainPage = (status) => {
    if (womensMainPageProducts !== undefined) {
      if (status === "isNewArrivals") {
        let newIsNewArrivals = [...womensMainPageProducts].filter(
          (item) => item.particulars.isNewArrivals === true
        );
        setCategoryWomensMain(newIsNewArrivals);
      }
      if (status === "isSpecial") {
        let newIsStatus = [...womensMainPageProducts].filter(
          (item) => item.particulars.isSpecial === true
        );
        setCategoryWomensMain(newIsStatus);
      }
      if (status === "isBestseller") {
        let newIsBestseller = [...womensMainPageProducts].filter(
          (item) => item.particulars.isBestseller === true
        );
        setCategoryWomensMain(newIsBestseller);
      }
      if (status === "isMostViewed") {
        let newIsMostViewed = [...womensMainPageProducts].filter(
          (item) => item.particulars.isMostViewed === true
        );
        setCategoryWomensMain(newIsMostViewed);
      }
      if (status === "isFeatured") {
        let newIsFeatured = [...womensMainPageProducts].filter(
          (item) => item.particulars.isFeatured === true
        );
        setCategoryWomensMain(newIsFeatured);
      }
    }
  };
  const filtersMensMainPage = (status) => {
    if (mensMainPageProducts !== undefined) {
      if (status === "isNewArrivals") {
        let newIsNewArrivals = [...mensMainPageProducts].filter(
          (item) => item.particulars.isNewArrivals === true
        );
        setcategoryMensMain(newIsNewArrivals);
      }
      if (status === "isSpecial") {
        let newIsStatus = [...mensMainPageProducts].filter(
          (item) => item.particulars.isSpecial === true
        );
        setcategoryMensMain(newIsStatus);
      }
      if (status === "isBestseller") {
        let newIsBestseller = [...mensMainPageProducts].filter(
          (item) => item.particulars.isBestseller === true
        );
        setcategoryMensMain(newIsBestseller);
      }
      if (status === "isMostViewed") {
        let newIsMostViewed = [...mensMainPageProducts].filter(
          (item) => item.particulars.isMostViewed === true
        );
        setcategoryMensMain(newIsMostViewed);
      }
      if (status === "isFeatured") {
        let newIsFeatured = [...mensMainPageProducts].filter(
          (item) => item.particulars.isFeatured === true
        );
        setcategoryMensMain(newIsFeatured);
      }
    }
  };

  return (
    <div>
      {status === "loading" && (
        <div className="parent-loader" data-test-id="loader">
          <Loader
            type="bubble-top"
            bgColor={"#121212"}
            color={"#121212"}
            size={70}
          />
        </div>
      )}
      {error && (
        <div className="wrapper-error" data-test-id="error">
          <div className="error-message-block">
            <h2 className="error-title">Ошибка получения данных</h2>
          </div>
        </div>
      )}
      <Header />
      <Free />
      <WomensBtn
        filtersWomensMainPage={filtersWomensMainPage}
        womensMainPageProducts={womensMainPageProducts}
      />
      {status === "resolved" ? (
        <Womens categoryWomensMain={categoryWomensMain} />
      ) : null}
      <SeeBtn />
      <MensBtn
        filtersMensMainPage={filtersMensMainPage}
        mensMainPageProducts={mensMainPageProducts}
      />
      {status === "resolved" ? (
        <Mens categoryMensMain={categoryMensMain} />
      ) : null}

      <SeeBtnMen />
      <Collection />
      <Subscribe/>
      <Blog />
      <Footer/>
    </div>
  );
}

export default MainPage;
