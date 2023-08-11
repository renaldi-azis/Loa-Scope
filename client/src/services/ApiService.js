import axios from 'axios';

const $http = axios.create({
// Temp comment
  baseURL: $config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

$http.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
