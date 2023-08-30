import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decoded = jwtDecode(token);
// Temp comment
    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
    return token;
  },
