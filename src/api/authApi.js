import axios from "./axios";

export const loginUser = async (data) => {
  const res = await axios.post("/auth/login", data);
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post("/auth/logout");
  return res.data;
};

export const getMe = async () => {
  const res = await axios.get("/auth/me");
  return res.data;
};
