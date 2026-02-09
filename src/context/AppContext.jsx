import React, { createContext, useState, useContext } from "react";

// 1️⃣ Context create
const AppContext = createContext();

// 2️⃣ Provider create
const AppProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([]);

  // functions
  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  const addCar = (car) => {
    setCars(prev => [...prev, car]);
  };

  return (
    <AppContext.Provider value={{ user, cars, login, logout, addCar }}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook (easy access)
export const useAppContext = () => useContext(AppContext);

export default AppProvider;
