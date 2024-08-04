// src/http.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://15.207.39.254:5000",
//   "http://localhost:5000", // Replace with your API base URL
  // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
