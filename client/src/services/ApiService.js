import axios from 'axios';

// Temp comment
const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

