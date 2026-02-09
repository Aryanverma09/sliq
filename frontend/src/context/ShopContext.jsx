import React, { createContext, useState, useEffect } from 'react';
import { products } from '../data/products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  
  const savedCart = localStorage.getItem('sliq-cart');
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    localStorage.setItem('sliq-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 0) {
        newCart[itemId] -= 1;
        if (newCart[itemId] === 0) {
          delete newCart[itemId];
        }
      }
      return newCart;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
           totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
    clearCart,
    products
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
