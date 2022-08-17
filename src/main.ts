import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import './registerServiceWorker'
import '@/assets/scss/style.scss';

const app = createApp(App).use(i18n).use(store).use(router);
if (process.env.NODE_ENV === 'development') {
    app.config.performance = true;
}
app.mount('#app');