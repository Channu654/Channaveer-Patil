import React, { useState } from 'react';

const Form = () => {
  const [formdata, setFormdata] = useState({
    Name: '',
    Email: '',
    password: '',
  });
  //onchange
  const handlechange = (e) => {
    let name = e.target.name;
    setFormdata({ ...formdata, [name]: e.target.value });
  
  };

  //formsubmit
  const handlesubmit = (e) => {
    e.preventDefault();

    
  };
  return (
    <div>
      <div>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          name='Name'
          placeholder='Enter name'
          value={formdata.Name}
          onChange={handlechange}
        />
      </div>
      <div>
        <label htmlFor=''>Email</label>
        <input
          type='text'
          name='Email'
          placeholder='Enter Email'
          value={formdata.Email}
          onChange={handlechange}
        />
      </div>
      <div>
        <label htmlFor=''>password</label>
        <input
          type='text'
          name='password'
          placeholder='Enter Password'
          value={formdata.password}
          onChange={handlechange}
        />
      </div>
      <button onSubmit={handlesubmit}>Submit</button>
    </div>
  );
};

export default Form;
