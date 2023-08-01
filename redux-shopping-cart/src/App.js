import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Products } from './features/products/Products.jsx';
import { Cart } from './features/cart/Cart.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
