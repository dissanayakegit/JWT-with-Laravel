import vue from 'vue';
import router from './router.js'
require('./bootstrap');

import Vue from 'vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

window.Vue = require('vue');

import App from './App.vue'

new Vue({
    el: '#app',
    router,
    components: {
        App
    }
}
);