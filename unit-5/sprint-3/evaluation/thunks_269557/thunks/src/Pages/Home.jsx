import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../redux/auth/action';

export const Home = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = formData;
    if (value) {
      postLogin({
        value,
        dispatch,
      });
    }
  };
  return (
    <div>
      <h1>Log In</h1>
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
