import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"

export const Navbar = () => {
    const {login}=useSelector((state)=>state.login);
    console.log(login?.data.token);
  return (
    <div >
        <div className={style.navMain}>
        <div>
        <div>  <p>email: </p></div>
        </div>
        <div className={style.navMain}>
        <div> <h5>Token:{login?.data.token} </h5></div>
       
        </div>
        </div>
    </div>
  )
}
