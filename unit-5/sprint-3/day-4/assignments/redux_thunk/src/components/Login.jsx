import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { postLogin } from '../store/actions';

export const Login = () => {
  const [formData,setFormData]=useState({

  })
  const dispatch=useDispatch()
  const { tokens } = useContext(AuthContext);
  console.log(tokens);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (tokens) {
      navigate(from, { replace: true });
    }
  }, [tokens]);


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
        dispatch
      });
    }
    
  };
  return (
    <div>
        <h1>Log In</h1>
        <form onSubmit={haddleSubmit}> 
        <input
          type="text"
          placeholder="Enter yours username"
          name="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Enter yours password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" name="submit" value="Log in" />
        </form>
         
       <h1> if Not register <Link to="/Regitration">Go to Regitration</Link></h1>
    </div>
  )
}
