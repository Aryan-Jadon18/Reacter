import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // update when backend is ready
  withCredentials: true, // send cookies if using JWT in httpOnly cookies
});

export default API;
