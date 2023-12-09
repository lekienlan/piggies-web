import axiosLib from 'axios';
import queryString from 'query-string';

export const getToken = () => {
  return `Bearer ${
    JSON.parse(localStorage.getItem('authentication') || '{}')?.state
      ?.accessToken ?? ''
  }`;
};

const axios = axiosLib.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  validateStatus: (s) => s >= 200 && s < 400,

  headers: {
    Authorization: getToken(),
    'X-OneLife-Context': 'admin'
  },
  paramsSerializer: (p) => {
    return queryString.stringify(p, { arrayFormat: 'comma' });
  }
});

// request interceptor
axios.interceptors.request.use(
  async (request) => {
    request.headers.Authorization = getToken();

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
