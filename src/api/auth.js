import axios from "./axios";

// signup
export const signupUser = async (data) => {
  const res = await axios.post("/auth/signup", data);
  return res.data;
};

// login
export const loginUser = async (data) => {
  const res = await axios.post("/auth/login", data);
  return res.data;
};

// logout
export const logoutUser = async () => {
  const res = await axios.post("/auth/logout");
  return res.data;
};

// check auth
export const getMe = async () => {
  const res = await axios.get("/auth/me");
  return res.data;
};
