import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../redux/auth/action';

export const Home = () => {
  const [inputData, setnputData] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputName = e.target.name;
    setnputData({
      ...inputData,
      [inputName]: e.target.value,
    });
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = inputData;
    if (value) {
      postLogin({
        value,
        dispatch,
      });
    }
  };
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={haddleSubmit}>
        <input
          type='text'
          placeholder='Enter yours email'
          name='email'
          onChange={handleChange}
        />
        <br />
        <input
          type='password'
          placeholder='Enter yours password'
          name='password'
          onChange={handleChange}
        />
        <br />
        <input type='submit' name='submit' value='Log in' />
      </form>
    </div>
  );
};
