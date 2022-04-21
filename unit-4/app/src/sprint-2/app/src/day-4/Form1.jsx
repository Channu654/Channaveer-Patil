import React, { useState } from 'react';

const Form1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChange1 = (e) => {
    setPassword(e.target.value);
  };
  // for storing in array user entry her
  const [allentry, setAllEntry] = useState([]);

  const submitFomm = (e) => {
    e.preventDefault();
    const newentry = { email: email, password: password };

    setAllEntry([...allentry, newentry]);
    console.log(allentry);
  };
  return (
    <>
      <form action='' onSubmit={submitFomm}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            value={email}
            id='email'
            autoComplete='off'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            value={password}
            id='password'
            autoComplete='off'
            required
            onChange={handleChange1}
          />
        </div>
        <button type='submit'>submit</button>
      </form>
      <div>  
         {
             allentry .map((el)=>{
                 return (
                     <div className='ShowDtat'>
                     <p>{el.email}</p> 
                    <p>{el.password}</p>  
                     </div>
                    

                 )
             })
         }
      </div>
    </>
  );
};

export default Form1;
