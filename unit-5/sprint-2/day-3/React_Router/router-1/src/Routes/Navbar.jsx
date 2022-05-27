import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <Link to='/Home'>Home </Link>
      <Link to='/About'>About </Link>
      <Link to='/Contact'>Contact </Link>
      <Link to='/User'>User </Link>
    </div>
  );
};

export default Navbar;
