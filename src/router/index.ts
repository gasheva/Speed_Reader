import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import store from '@/store';

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
        // redirect: {name: 'registration'},
        // children: [
        //     {
        //         path: '/sign/login',
        //         name: 'login',
        //         component: () => import(/* webpackChunkName: "login" */ '@/components/components/Sign/Login.vue'),
        //         meta: {layout: 'empty'},
        //     },
        //     {
        //         path: '/sign/register',
        //         name: 'registration',
        //         component: () => import(/* webpackChunkName: "register" */ '@/components/components/Sign/Registration.vue'),
        //         meta: {layout: 'empty'},
        //     },
        //     {
        //         path: '/sign:afterSign(.*)',
        //         redirect: {name: 'registration'}
        //     },
        // ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        meta: {layout: 'empty'},
        component: () => import(/* webpackChunkName: "404" */'@/views/404.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from)=>{
    if (!to.name) return;
    if(to.name==='sign' && store.getters['auth/isAuth']) return {name: 'home'};
})

export default router;
