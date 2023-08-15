import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
// Temp comment
    'Content-Type': 'application/json',
  },
});

$http.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
