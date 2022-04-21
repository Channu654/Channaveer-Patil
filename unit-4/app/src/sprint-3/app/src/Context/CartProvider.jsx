import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartCosumer = CartContext.Consumer;

export const CartProvider = ({ children }) => {
  const [value, setValue] = useState(0);
const addItemToCart =()=>{
    setValue(value+1)
}
  return (
    <CartContext.Provider value={{ value,addItemToCart}}>
      {children}
    </CartContext.Provider>
  );
};
