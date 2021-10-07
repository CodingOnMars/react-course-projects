import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

// NOTE: make sure to display children
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='test value'>{children}</AppContext.Provider>
  );
};

// Custom hook in case if we don't want to import useContext and AppContext too many times

// NOTE: custom hooks as regular hooks must start with 'use' - useGlobalContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
