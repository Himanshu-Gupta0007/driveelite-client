import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "../api/axios";

// 1️⃣ Context
const AppContext = createContext();

// 2️⃣ Provider
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= AUTH =================

  // check login on refresh
  const checkAuth = async () => {
    try {
      const res = await axios.get("/auth/me");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // login
  const login = async (formData) => {
    try {
      const res = await axios.post("/auth/login", formData);
      setUser(res.data.user);
      toast.success("Login successful");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  // logout
  const logout = async () => {
    try {
      await axios.post("/auth/logout");
      setUser(null);
      toast.success("Logged out");
    } catch {
      toast.error("Logout failed");
    }
  };

  // ================= CARS =================

  const fetchCars = async () => {
    try {
      const res = await axios.get("/cars");
      setCars(res.data);
    } catch {
      toast.error("Failed to load cars");
    }
  };

  const addCar = async (carData) => {
    try {
      const res = await axios.post("/owner/add-car", carData);
      setCars(prev => [...prev, res.data]);
      toast.success("Car added");
    } catch {
      toast.error("Failed to add car");
    }
  };

  // first load
  useEffect(() => {
    checkAuth();
    fetchCars();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        cars,
        loading,
        login,
        logout,
        fetchCars,
        addCar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ hook
export const useAppContext = () => useContext(AppContext);

export default AppProvider;
