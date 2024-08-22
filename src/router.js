import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppBlog.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/errors/not-found.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/Feed',
            name: 'posts',
            component: AppBlog 
        },
        {
            path: '/About',
            name: 'about',
            component: AppAbout 
        },
        {
            path: '/404',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/404',
            name: 'not-found',
            component: NotFound
        },
    ]
});
export { router };