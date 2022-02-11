import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import WomensPage from './Pages/WomensPage';
import MensPage from './Pages/MensPage';
import CartPageWomen from './Pages/CartPageWomen';
import CartPageMen from './Pages/CartPageMen';
import AboutUsPage from './Pages/AboutUsPage';
import BeautyPage from './Pages/BeautyPage';
import AccessoriesPage from './Pages/AccssesoriesPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';



function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/training-shop' element={<MainPage/>}/>
        <Route path='/training-shop/womens' element={<WomensPage/>}/>
        <Route path='/training-shop/womens/:id' element={<CartPageWomen/>}/>
        <Route path='/training-shop/mens' element={<MensPage/>}/>
        <Route path='/training-shop/mens/:id' element={<CartPageMen/>}/>
        <Route path='/training-shop/aboutUs' element={<AboutUsPage/>}/>
        <Route path='/training-shop/beauty' element={<BeautyPage/>}/>
        <Route path='/training-shop/accessories' element={<AccessoriesPage/>}/>
        <Route path='/training-shop/blog' element={<BlogPage/>}/>
        <Route path='/training-shop/contact' element={<ContactPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
