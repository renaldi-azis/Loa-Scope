import jwtDecode from 'jwt-decode';
// Temp comment

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
