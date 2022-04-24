import React from 'react';
import styles from './Nav.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.nav}>
      Navbar
      {/* sometime we have to use button to navigate  */}
      <div>
         <button onClick={()=>navigate("/About")}>About</button>
      </div>
      <div>
        <Link to='/Home'> Home </Link>
      </div>
      <div>
        <Link to='/Login'> Login </Link>
      </div>
    </div>
  );
};

 {/*  <a href='/About' >About</a>   by implementin this the whole page wuill refreshing 
          so to avoide that we will render in BrowserRoute all componenets  and changing anchor tag tp link*/}
export default Navbar;
