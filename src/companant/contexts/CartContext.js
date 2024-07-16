import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Provider component to wrap around parts of the app that need access to the cart context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // State to store items in the cart

  // Function to add an item to the cart
  const addToCart = (item) => {
    const itemExists = cartItems.find(cartItem => cartItem.idMeal === item.idMeal); // Check if the item already exists in the cart
    if (itemExists) {
      // If item exists, update its quantity
      setCartItems(cartItems.map(cartItem => 
        cartItem.idMeal === item.idMeal 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
      ));
    } else {
      // If item does not exist, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.map(cartItem => 
      cartItem.idMeal === id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 } 
      : cartItem
    ).filter(cartItem => cartItem.quantity > 0); // Filter out items with quantity 0
    setCartItems(updatedCart);
  };

  return (
    // Provide cartItems, addToCart, and removeFromCart to the context consumers
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
