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
    if(error.response?.status === 500){
        store.commit('setMessage', error.response.data);
    }
    if (error.response?.status === 401) {
        store.dispatch('auth/logout');
    }
    store.commit('setMessage', {title: 'Some error', text:'Ooohps'});
});

export default auth;