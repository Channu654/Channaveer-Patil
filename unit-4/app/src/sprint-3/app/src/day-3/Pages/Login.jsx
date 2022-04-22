import React from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import Google from '../Components/Google';
import Signin from '../Components/Signin';
import SignUp from '../Components/SignUp';

const Login = () => {
  const navigate = useNavigate();
  return (
    <h1>
      <button onClick={() => navigate('/Login/Signin')}>Sign-in</button>
      <button onClick={() => navigate('/Login/Signup')}>Sign-up</button>
      <button onClick={() => navigate('/Login/Google')}>
        Log-in With Google
      </button>

      <div>
        <Outlet />
      </div>
    </h1>
  );
};
export default Login;
