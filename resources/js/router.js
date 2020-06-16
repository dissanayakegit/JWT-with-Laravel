import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import Register from './components/Register.vue'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        // {
        //     name: 'login',
        //     path: '/',
        //     component: Login
        // },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        }
    ],
    mode: 'history'
});