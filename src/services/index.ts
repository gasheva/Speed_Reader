import axios from 'axios';
import store from '@/store';

const auth = axios.create({
    baseURL: process.env.VUE_APP_AUTH_SERVER
});

auth.interceptors.request.use(config => {
    const token = store.getters['auth/getToken'];
    config.headers!.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

auth.interceptors.response.use(undefined, error => {
    if (401 === error.response.status) {
        store.dispatch('auth/logout');
    }
});

export default auth;