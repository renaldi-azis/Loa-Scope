import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Temp comment

$http.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if ($helpers.isAuthenticated()) {
      newConfig.headers.common.Authorization = `Bearer ${$helpers.getApiToken()}`;
    }
