import axios from "axios";

const instance = axios.create({
    baseURL: 'http://server:5000'
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
}, error => {
    console.log(error)
    return Promise.reject(error)
});

export default instance;