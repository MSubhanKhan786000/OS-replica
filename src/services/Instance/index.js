import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000, // You can set a timeout for requests
});

// Interceptors can be added here if you want to handle token or error responses globally
axiosInstance.interceptors.request.use(
  config => {
    // You can add authentication tokens or headers here if needed
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
