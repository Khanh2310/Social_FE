import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const isRefreshing = false;
let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
}[] = [];
const processQueue = (error: null, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;
    if (response.status === 401 && !config._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return axios({
              ...config,
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/plain, */**',
              },
            });
          })
          .catch((err) => {
            return err;
          });
      }
    }
  }
);
