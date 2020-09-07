import axios from 'axios';

const ajax = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default ajax;

ajax.interceptors.request.use((config) => {
  const updatedHeaders = { ...config.headers };
  return { ...config, headers: updatedHeaders };
});
