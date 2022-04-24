import React from 'react';

const Signin = () => {
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
      setFormData({
        ...formData,

        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <div>
      <h1>Sign-in</h1>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=''> usename</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor=''>password</label>
            <input
              type='password'
              name='password'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input type='submit' name='submit' />
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Signin;
