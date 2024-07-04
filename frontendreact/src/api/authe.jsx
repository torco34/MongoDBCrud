import axios from "./auth";
// const API = "http://localhost:3000/api";
// console.log(API, "api");
export const registerRequest = (user) =>
  axios.post(`/register`, user);
console.log(registerRequest, "axios ");
// login

export const loginRequest = (user) => axios.post(`/login`, user);
export  const verityToken = () => axios.get('/verify')
console.log(loginRequest, "axios ");