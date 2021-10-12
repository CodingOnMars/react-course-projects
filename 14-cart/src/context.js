import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // NOTE: we need to pass id. Convention name is payload: id
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  // NOTE: this code was replaced by toggleAmount
  // const increase = (id) => {
  //   dispatch({ type: 'INCREASE', payload: id });
  // };

  // const decrease = (id) => {
  //   dispatch({ type: 'DECREASE', payload: id });
  // };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // NOTE: this useEffect will run every time we do changes in the cart (increase, decrease, remove items)
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        // increase,
        // decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
