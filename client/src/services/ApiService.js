import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
// Temp comment
  },
});
