import React from "react";

const Card = ({data,value}) => {
    const {name , image, phone , id} = data;
    const {display,setDisplay} = value
  return (
    <div className='person' onClick={() => setDisplay(!display)}>
      <img src={image} alt='' />
      <div>
        <h4>{name}</h4>
        <h4>{phone}</h4>
      </div>
    </div>
  );
};

export default Card;
