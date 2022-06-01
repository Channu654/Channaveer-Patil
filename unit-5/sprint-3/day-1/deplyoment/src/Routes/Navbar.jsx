import React from 'react';
import { Link } from 'react-router-dom';
import './Links.module.css';
const Navbar = () => {
  return (
    <div className='links'>
      <Link to='/Home'>Home </Link>
      <Link to='/About'>About </Link>
      <Link to='/Contact'>Contact </Link>
      <Link to='/User'>User </Link>
   
    </div>
  );
};

export default Navbar;
