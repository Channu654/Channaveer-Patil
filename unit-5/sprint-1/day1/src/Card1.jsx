import React from "react";

const Card1 = ({person,setDisplay,display,setData}) => {
    const {name,image,Email,phone} = person;
    const handleClick = () => {
        
        setDisplay(!display);
   setData({name,image,Email,phone})
    }
  return (
    <div >
        <article
        onClick={handleClick}
          className='person'
          >
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{Email} years</p>
          </div>
        </article>
    </div>
  );
};

export default Card1;
