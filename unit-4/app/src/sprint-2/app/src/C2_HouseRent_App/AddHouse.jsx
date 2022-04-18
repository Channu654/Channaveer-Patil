import { useEffect, useState} from 'react'
export const AddHouse = () => {
  const [formData, setFormdata]= useState({
    name: '',
    ownerName: '',
    address: '',
    areaCode: '',
    rent: '',
    married: '',
  });
  const formSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);

  
    postform(formData);

  }
  const postform = async (value)=>{
    let res= await fetch("http://localhost:8080/houses",{
      method:"POST",
      headers:{"Content-type": "application/json"},
      body: JSON.stringify(value),
    });
    let data= await res.json();
    
    setFormdata(data)
  }
  const handleChange =(event)=>{
    let Name =event.target.className;
    setFormdata({...formData,[Name]:event.target.value})
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={formSubmit}>
        <label>name</label>
        <input type="text" className="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} type="text" className="ownerName" onChange={handleChange}  required />
        <br />
        <label>address</label>
        <input value={formData.address} type="text" className="address" onChange={handleChange}  required />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode}type="text" className="areaCode" onChange={handleChange}  required />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" className="rent" onChange={handleChange}  required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input  type="checkbox" onChange={handleChange}  className="married" />
        <br />
        <label>image</label>
        <input value={formData.image} type="text" onChange={handleChange}  className="image" required />
        <br />
        <input className="submitBtn"  type="submit" />
      </form>
    </div>
  );
};