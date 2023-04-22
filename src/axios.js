import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
}, error => {
    console.log(error)
    return Promise.reject(error)
});

export default instance;