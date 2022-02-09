import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import WomensPage from './Pages/WomensPage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/training-shop' element={<MainPage/>}/>
        <Route path='/training-shop/womens' element={<WomensPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
