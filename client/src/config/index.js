const PROD_API_URL = 'https://api.loascope.com/api/';
const DEV_API_URL = 'https://api.loascope.com/api/';
const LOCAL_API_URL = 'http://localhost:3000/api/';

const { hostname } = window.location;
const DEV_HOSTNAME = '54.210.3.86';
const LOCAL_HOSTNAME = 'localhost';
// Temp comment

const getApiBaseURL = () => {
  if (hostname.includes(LOCAL_HOSTNAME)) {
    return LOCAL_API_URL;
  }
  if (hostname.includes(DEV_HOSTNAME)) {
    return DEV_API_URL;
  }
  return PROD_API_URL;
