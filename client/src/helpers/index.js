import jwtDecode from 'jwt-decode';

window.$helpers = {
  getApiToken() {
    if (!token) return null;
