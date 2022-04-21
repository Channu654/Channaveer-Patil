import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import NavbarCartitems from './NavbarCartitems';

const Navbar = () => {
    const [toggleTheme]= useContext(ThemeContext)
  return (
    <div className='border'>
      Navbar
      <button onClick={toggleTheme}> Toggle Theme</button>
      <NavbarCartitems />
    </div>
  );
};

export default Navbar;
