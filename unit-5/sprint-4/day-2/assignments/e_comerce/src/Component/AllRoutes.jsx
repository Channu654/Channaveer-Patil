import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import Products from '../Pages/Products';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
