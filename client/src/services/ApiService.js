import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
// Temp comment
    'Content-Type': 'application/json',
