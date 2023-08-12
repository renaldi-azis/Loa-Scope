import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
