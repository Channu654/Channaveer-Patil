import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import User from './User';
import styles from './Navbar.module.css';
import Login from './Login';

import Navbar from './Navbar';
import UserPage from './UsersPage';
import PrivateRoute from './PrivateRoute';
const AllRoutes = () => {
  return (
    <div className={styles.route}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <PrivateRoute>
          <Route path='/User' element={<User />}></Route>
        </PrivateRoute>
        <Route path='/User/:id' element={<UserPage />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
