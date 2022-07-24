import React from 'react';
import Login from '../../pages/Login';
import { Signup } from '../../pages/Signup';
import { Link } from 'react-router-dom';
import Cart from '../../pages/Cart';
import { Hamber } from './Hamber';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid black',
        background: '#008ECC',
        width: '100%',
        height: '50px',
        alignItems: 'center',
      }}>
      <Hamber />
      {/* <h1 style={{ marginLeft: '100px', color: 'white' }}>jioMart</h1>; */}
      {/* search bar */}
      <div>
        <img
          src='https://www.jiomart.com/assets/version1657814599/smartweb/images/jiomart_logo_beta.svg'
          alt=''
        />
      </div>
      <div style={{ alignItems: 'center', marginLeft: '200px' }}>
        <input
          type='text'
          style={{ height: '30px', width: '500px', border: 'none' }}
          placeholder='Search essential , groceries , more....'
        />
      </div>
      <div style={{ color: 'white', marginLeft: '10px' }}>
        <Link to='/Signup'>Signup</Link>
      </div>
      <h1 style={{ color: 'white' }}>/</h1>
      <div style={{ color: 'white', marginLeft: '10px' }}>
        <Link to='/Login'>Login</Link>
      </div>
      {/* cart */}
      <div style={{ color: 'white', marginLeft: '120px', display: 'flex' }}>
        <img
          src='https://cdn-icons-png.flaticon.com/512/40/40368.png'
          alt=''
          style={{ width: '30px', color: 'white' }}
        />
        <Link to='/Cart'>
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
