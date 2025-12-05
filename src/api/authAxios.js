import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:9090",
  headers: {
    "Content-Type": "application/json",
  },
});

export default authApi;
