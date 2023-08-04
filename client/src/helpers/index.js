import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
// Temp comment
    if (!token) return null;
