import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Pages/MainPage";
import WomensPage from "./Pages/WomensPage";
import MensPage from "./Pages/MensPage";
import CartPageWomen from "./Pages/CartPageWomen";
import CartPageMen from "./Pages/CartPageMen";
import AboutUsPage from "./Pages/AboutUsPage";
import BeautyPage from "./Pages/BeautyPage";
import AccessoriesPage from "./Pages/AccssesoriesPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ShopCart from "./Components/ShopCart/ShopCart";
import { useDispatch} from "react-redux";
import { getAllProducts } from "./redux/products/productsSlice";

function App() {
  const [showLink, setShowLink] = useState(false);
  const handleShowLink = () => {
    setShowLink(!showLink);
  };

  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  


  return (
    <div className={showCart ? "wrapper-html noscroll" : "wrapper-html"} data-test-id="app">
      <ShopCart showCart={showCart} handleShowCart={handleShowCart}  setShowCart={setShowCart}/>
      {/* {showCart ? (
        <ShopCart handleShowCart={handleShowCart} setShowCart={setShowCart} />
      ) : null} */}

      <Navigation
        showLink={showLink}
        handleShowLink={handleShowLink}
        handleShowCart={handleShowCart}
      />
      <div className="wrapper" onClick={() => setShowLink(false)}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/women" element={<WomensPage />} />
          <Route path="/women/:routeId" element={<CartPageWomen/>} />
          <Route path="/men" element={<MensPage />} />
          <Route path="/men/:routeId" element={<CartPageMen />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
