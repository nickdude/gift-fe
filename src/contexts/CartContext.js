import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  cart: [],
};

// Create context
const CartContext = createContext(initialState);

// Cart reducer
const cartReducer = (state, action) => {
    
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.payload._id),
      };
    case 'UPDATE_CART_ITEM':
        return {
          ...state,
          cart: state.cart.map(item =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
    default:
      return state;
  }
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = item => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const updateCartItem = item => {
    dispatch({ type: 'UPDATE_CART_ITEM', payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
