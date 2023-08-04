import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
    'Content-Type': 'application/json',
  },
});

$http.interceptors.request.use(
