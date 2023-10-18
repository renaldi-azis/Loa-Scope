import axios from 'axios';

const $http = axios.create({
  baseURL: $config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

$http.interceptors.request.use(
    const newConfig = { ...config };
    if ($helpers.isAuthenticated()) {
      newConfig.headers.common.Authorization = `Bearer ${$helpers.getApiToken()}`;
    }
    return newConfig;
  },
  (err) => Promise.reject(err),
);

$http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.status === 401) {
      $helpers.logout();
    }
    return Promise.reject(err);
  },
);
