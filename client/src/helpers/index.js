import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
// Temp comment
    const token = localStorage.getItem('token');
