import jwtDecode from 'jwt-decode';

window.$helpers = {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decoded = jwtDecode(token);
    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
    return token;
