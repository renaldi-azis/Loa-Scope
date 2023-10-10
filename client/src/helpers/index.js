import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
    return token;
  },
  isAuthenticated() {
    return !!this.getApiToken();
  },
  logout() {
    localStorage.clear();
    window.location.reload();
