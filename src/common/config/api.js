import axios from 'axios';

const { BUNDLE_API_ROOT } = process.env;

export const API = axios.create({
  baseURL: BUNDLE_API_ROOT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
