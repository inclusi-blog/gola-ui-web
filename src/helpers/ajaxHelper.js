import axios from 'axios';
import CONFIGS from 'appConfig';

const ajax = axios.create({
  baseURL: `${CONFIGS.API_BASE_URL}/api`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default ajax;

export const CancelToken = () => axios.CancelToken.source();

export const { isCancel } = axios;

ajax.interceptors.request.use((config) => {
  const updatedHeaders = { ...config.headers };
  return { ...config, headers: updatedHeaders };
});
