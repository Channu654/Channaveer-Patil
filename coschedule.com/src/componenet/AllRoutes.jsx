import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Calender from '../pages/Calender';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Pricing from '../pages/Home/Pricing';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Signin from '../pages/Login';
import Product from './Product';

const AllRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Calender' element={<Calender />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
      <Box></Box>
      <h2 style={{ marginTop: '50px' }}>
        <Footer />
      </h2>
    </div>
  );
};

export default AllRoutes;
