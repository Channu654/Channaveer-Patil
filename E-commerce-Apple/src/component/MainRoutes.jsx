import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import FilterSorting from './FilterSorting';
import { Navbar } from './Navbar';

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/filtersort' element={<FilterSorting />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
