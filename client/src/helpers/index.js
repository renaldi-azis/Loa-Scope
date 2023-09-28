import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decoded = jwtDecode(token);
    return token;
  },
  isAuthenticated() {
    return !!this.getApiToken();
  },
  logout() {
