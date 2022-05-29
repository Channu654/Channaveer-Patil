import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import User from './User';
import styles from './Navbar.module.css';

import Navbar from './Navbar';
import UserPage from './UsersPage';
const AllRoutes = () => {
  return (
    <div className={styles.route}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/User' element={<User />}></Route>
        <Route path='/User/:id' element={<UserPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
