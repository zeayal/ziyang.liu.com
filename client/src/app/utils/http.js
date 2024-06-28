import axios from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.191.84:3001',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// 添加请求拦截器
http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token;
        return config;
    }
)

// 添加相应拦截器
http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default http;