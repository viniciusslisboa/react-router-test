import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css'

import Home from './pages/Home';
import Products from './pages/Products';
import Header from './Components/Header';
import Productdetails from './pages/Productdetails';

 const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;