import axios from "axios";
const API = "http://localhost:3000/api";
console.log(API, "api");
export const registerRequest = (user) =>
  axios.post(`${API}/register`, user);
console.log(registerRequest, "axios");
