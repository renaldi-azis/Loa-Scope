import jwtDecode from 'jwt-decode';

  getApiToken() {
    const token = localStorage.getItem('token');
