import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
// Temp comment
  headers: {
    'Content-Type': 'application/json',
