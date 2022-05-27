import React, { useContext, useState } from 'react';
import { Appcontext } from '../Appcontext/AppcontextProvider';
import style from "./Button.module.css"
//8 createing button using propsAS Text
const Button = ({ text }) => {
  //9 we retreving data from Appcontext
  const [theme] = useContext(Appcontext);


  return (
    <div>
      <button className={`${style.buttonBase} ${theme ==="light"? style.buttonLight:style.buttonDark}`} 
      >{text}</button>
    </div>
  );
};

export default Button;
