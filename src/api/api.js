import axios from "axios";
// import store from '@/store/index.js';

const API_URL = "http://127.0.0.1/apiv2";

export const $api = axios.create({
    baseURL: API_URL
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`
    return config;
});

// $api.interceptors.response.use(config => {
//     return config;
// }, async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             await store.dispatch('global/refreshToken');
//             return $api.request(originalRequest);
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН');
//         }
//     }
//     throw error;
// });
