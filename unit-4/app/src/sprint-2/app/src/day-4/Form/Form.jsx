import React, { useState } from 'react';
import styles from './form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    Name:"",
    Age:"",
    Address:"",
    Department:"",
    material:"",
    showpassword:false,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log('inputName:', inputName)

    //checkbox
    if (e.target.type === 'checkbox') {
      //  console.log('e.target.type:', e.target.type  ,e.target.checked)

      setFormData({
        ...formData,
        [inputName]: e.target.checked,
      });
    }
    else if(e.target.type==="file"){
      setFormData({
        ...formData,
        [inputName]:e.target.files,
      })
    }
    else{
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    }
    
  };
  const formSubmit = (e) => {};

  return (
    <div className={styles.form}>
      <form onSubmit={formSubmit}>
        <div className={styles.grid}>
          <label htmlFor=''> Aame</label>
          <input type='text' name='name' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
          <label htmlFor=''> password</label>
          <input type={formData.showpassword ? "text":"password"} name='password' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
          <label htmlFor=''> showpassword</label>
          <input type='checkbox' name='showpassword' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
          <label htmlFor=''> Age</label>
          <input type='number' name='age' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
          <label htmlFor=''> Dob</label>
          <input type='date' name='dob' onChange={handleChange} />
        </div>
        <div>
          <input type='submit' name='submit' onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default Form;




// import React, { useState } from 'react';
// import styles from './form.module.css';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     username:"",
//     password:"",
//     showpassword:false,
//   });

//   const handleChange = (e) => {
//     const inputName = e.target.name;
//     // checkbox
//     if (e.target.type === 'checkbox') {
//       console.log(e.target.value, e.target.checked);

//       setFormData({
//         ...formData,
//         [inputName]: e.target.checked,
//       });
//     }
//     //files
//     else if (e.target.type === 'file') {
//       console.log(e.target.value, e.target.files);
//       setFormData({
//         ...formData,
//         [inputName]: e.target.files,
//       });
//     }
//      else {
//       setFormData({
//         ...formData,
//         [inputName]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div className={styles.form}>
//       Form
//       <form onSubmit={handleSubmit}>
//         <div className={styles.grid}>
//           <label htmlFor=''> username</label>
//           <input type='text' name='username' onChange={handleChange} />
//         </div>
//         <div className={styles.grid}>
//           <label htmlFor=''> password</label>
//           <input type={formData.showpassword ? "text" : "password"} name='password' onChange={handleChange} />
//         </div>
//         <div className={styles.grid}>
//           <label htmlFor=''> showpassword</label>
//           <input type='checkbox' name='showpassword' onChange={handleChange} />
//         </div>
//         <div className={styles.grid}>
//           <label htmlFor=''> Age</label>
//           <input type='number' name='Age' onChange={handleChange} />
//         </div>
//         <div className={styles.grid}>
//           <label htmlFor=''> DOB</label>
//           <input type='date' name='dob' onChange={handleChange} />
//         </div>
//         <div className={styles.grid}>
//           <label htmlFor=''> Resume</label>
//           <input type='file' name='resume' onChange={handleChange} />
//         </div>
//         <div className={styles.grid}>
//           <input type='submit' name='submit' />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
