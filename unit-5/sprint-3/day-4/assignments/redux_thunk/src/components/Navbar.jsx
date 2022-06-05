import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div >
        <div className={style.navMain}>
        <div>
        <div>  <Link to="/">Dashborad</Link></div>
        </div>
        <div className={style.navMain}>
        <div> <Link to="/login">Login</Link></div>
       <div><Link to="/Regitration">Regitration</Link></div>
        </div>
        </div>
    </div>
  )
}
