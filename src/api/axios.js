import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // ⭐ FIXED
  withCredentials: true,
});

export default axiosInstance;
