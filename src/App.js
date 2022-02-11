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
        <Route path='/' element={<MainPage/>}/>
        <Route path='/womens' element={<WomensPage/>}/>
        <Route path='/womens/:id' element={<CartPageWomen/>}/>
        <Route path='/mens' element={<MensPage/>}/>
        <Route path='/mens/:id' element={<CartPageMen/>}/>
        <Route path='/aboutUs' element={<AboutUsPage/>}/>
        <Route path='/beauty' element={<BeautyPage/>}/>
        <Route path='/accessories' element={<AccessoriesPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
