import React from 'react';
import styles from './Resto.module.css';
const RestaurantDetails = ({ image, name, rating, cost }) => {
  return (
    <div>
      <div className={styles.container}>
        <img src={image} alt='' />
        <h3>*{rating}</h3>
        <h3>{name}</h3>
        <h3>${cost}</h3>
      </div>
    </div>
  );
};

export default RestaurantDetails;
