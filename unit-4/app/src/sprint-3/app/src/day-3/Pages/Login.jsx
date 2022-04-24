import React from 'react';
import { Outlet, Routes, Route, useNavigate } from 'react-router-dom';
import Google from '../Components/Google';
import Signin from '../Components/Signin';
import SignUp from '../Components/SignUp';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('Sign-in')}>Sign-in</button>
      <button onClick={() => navigate('Sign-Up')}>Sign-up</button>
      <button onClick={() => navigate('Google')}>
        Log-in With Google
      </button>

      <Routes>
        <Route path='/Sign-in' element={<Signin />} />
        <Route path='/Sign-Up' element={<SignUp />} />
        <Route path='/Google' element={<Google />} />
      </Routes>
    </div>
  );
};
export default Login;
