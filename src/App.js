import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import WomensPage from './Pages/WomensPage';
import MensPage from './Pages/MensPage';
import CartPageWomen from './Pages/CartPageWomen';
import CartPageMen from './Pages/CartPageMen';



function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/training-shop' element={<MainPage/>}/>
        <Route path='/training-shop/womens' element={<WomensPage/>}/>
        <Route path='/training-shop/womens/:id' element={<CartPageWomen/>}/>
        <Route path='/training-shop/mens' element={<MensPage/>}/>
        <Route path='/training-shop/mens/:id' element={<CartPageMen/>}/>
      </Routes>

    </div>
  );
}

export default App;
