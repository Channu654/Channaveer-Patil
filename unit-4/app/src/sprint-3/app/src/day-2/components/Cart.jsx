import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';


const Cart = () => {
    const {addItemToCart} = useContext(CartContext)
 
  return (
    <div className='border'>
      {' '}
      Cart
      <button onClick={addItemToCart}> Add to cart</button>
    </div>
  );
};

export default Cart;
