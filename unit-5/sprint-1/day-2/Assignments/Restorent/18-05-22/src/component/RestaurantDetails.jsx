import React from 'react';
import styles from "./Resto.module.css"
const RestaurantDetails = ({ image }) => {
  return (
    <div>
      
      <div style={{display:'grid',flexDirection:"row" }}>

        <img src={image} alt='' />

      </div>
    </div>
  );
};

export default RestaurantDetails;
