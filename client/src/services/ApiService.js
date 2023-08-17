import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

$http.interceptors.request.use(
// Temp comment
  (config) => {
    const newConfig = { ...config };
    if ($helpers.isAuthenticated()) {
