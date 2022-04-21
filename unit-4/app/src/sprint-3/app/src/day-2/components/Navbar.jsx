import React, { useContext } from 'react';
import NavbarCartitems from './NavbarCartitems';

const Navbar = () => {
    const [theme]=useContext
  return (
    <div className='border'>
        <button> Tooggle Theme</button>
      Navbar
      <NavbarCartitems />
    </div>
  );
};

export default Navbar;
