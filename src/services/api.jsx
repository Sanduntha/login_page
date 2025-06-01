import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your real backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('2903|Um1jsOnfx0c18WETvMWwGx7OAUGRVj59hYSXlx0e3d857168'); // Optional: Save token after login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('2903|Um1jsOnfx0c18WETvMWwGx7OAUGRVj59hYSXlx0e3d857168');
      // Optionally: redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
