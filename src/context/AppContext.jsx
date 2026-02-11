import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { loginUser, logoutUser, getMe } from "../api/auth";

// 1️⃣ Context create
const AppContext = createContext();

// 2️⃣ Provider (DEFAULT EXPORT)
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Check auth on refresh
  const checkAuth = async () => {
    try {
      const data = await getMe();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Login
  const login = async (formData) => {
    try {
      const data = await loginUser(formData);
      setUser(data.user);
      toast.success("Login successful");
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      return false;
    }
  };

  // 🔹 Logout
  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      toast.success("Logged out");
    } catch {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useAppContext = () => useContext(AppContext);

// ✅ DEFAULT EXPORT (THIS FIXES YOUR ERROR)
export default AppProvider;
