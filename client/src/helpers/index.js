import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
