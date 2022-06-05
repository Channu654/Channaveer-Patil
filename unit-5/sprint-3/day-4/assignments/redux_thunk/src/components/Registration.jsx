import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postRegister } from "../store/actions";

export const Registration = () => {
    const [formData,setFormData]=useState({

    })
    const dispatch=useDispatch()
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
          postRegister({
            value,
            dispatch
          });
        }
      };
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={haddleSubmit}>
        <input
          type="text"
          placeholder="Enter yours name"
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter yours email"
          name="email"
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
        <input
          type="text"
          placeholder="Enter yours username"
          name="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter yours mobile"
          name="mobile"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter yours description"
          name="description"
          onChange={handleChange}
        />
        <br />
<input type="submit" name="submit" value="Submit" />
      </form>
      <Link to="/login">Go to logIn</Link>
    </div>
  );
};
