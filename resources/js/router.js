import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

Vue.use(VueRouter);

export default new VueRouter({
    routes :[
        {
            name: 'login',
            path:'/login' ,
            component : Login
        },
        {
            name: 'register',
            path:'/register' ,
            component : Register
        },
        {
            name: 'dashboard',
            path:'/dashboard' ,
            component : Dashboard
        },
    ],
       
    mode:'history'
});