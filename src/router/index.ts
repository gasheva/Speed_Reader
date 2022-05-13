import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        meta: {layout: 'main'},
    },
    {
        path: '/sign',
        name: 'sign',
        component: () => import(/* webpackChunkName: "sign" */ '@/views/SignView.vue'),
        meta: {layout: 'empty'},
        redirect: {name: 'registration'},
        children: [
            {
                path: '/sign/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "login" */ '@/components/components/Sign/Login.vue'),
                meta: {layout: 'empty'},
            },
            {
                path: '/sign/register',
                name: 'registration',
                component: () => import(/* webpackChunkName: "register" */ '@/components/components/Sign/Registration.vue'),
                meta: {layout: 'empty'},
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
