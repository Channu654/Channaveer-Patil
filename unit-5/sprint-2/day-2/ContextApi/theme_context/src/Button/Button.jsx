import React, { useContext } from 'react';
import { Appcontext } from '../Theme_Context/ThemeContextProvider';
import style from './Button.module.css';

const Button = ({ text }) => {
  const [theme] = useContext(Appcontext);

  return (
    <div>
      <button
        className={`${style.buttonBase} ${
          theme === 'light' ? style.buttonlight : style.buttonDark
        }`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
