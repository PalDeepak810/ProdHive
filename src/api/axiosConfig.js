import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090/api/personal",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const userId = localStorage.getItem("userId");

  // Send Basic Auth
  if (username && password) {
    const token = btoa(`${username}:${password}`);
    config.headers["Authorization"] = `Basic ${token}`;
  }

  // Send UserId to personal service
  if (userId) {
    config.headers["X-User-Id"] = userId;
  }

  return config;
});

export default api;
