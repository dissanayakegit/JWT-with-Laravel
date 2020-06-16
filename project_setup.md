Project setup

composer create - project laravel / laravel < project name > {--prefer - dist: optional}
{ “5.8.*”version }

npm install
php artisan preset vue(check how to scaffold veu for the laravel version.This command will
works only with 5.8 or below)
npm install vue - router vue - axios
npm run dev
php artisan make: controller AppController(name is optional)

comment out all in api.php
    *** web.php ***
    Route:: get('/{any}', 'AppController@index') -> where('any', '.*');
or let it be without changes

if changed create AppController and paste below code

public function index() {
    return view('welcome');
}

in welocome.balde.php

    < body >
    <div id="app">
        <App></App>
    </div>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body >

    app.js

import vue from 'vue';
import router from './router.js'
require('./bootstrap');
window.Vue = require('vue');
import App from './App.vue'
const app = new Vue({
    el: '#app',
    router,
    components: { App }
});
**if <App></App> doesn’t use in the blade file use here
render: h => h(App) instead of components: { App }});

App.vue

    < template >
    <div class="app">
        <h1>app dot vue</h1>
        <router-view></router-view>
    </div>
</template >
    <script>
        export default {
        }
    </script>
    <style scoped>
    </style>

route.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomerList from "./components/CustomerList";
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            name: 'customer',
            path: '/customer',
            component: CustomerList
        }
    ],
    mode: 'history'
});

adding boostrap

npm install vue bootstrap - vue bootstrap

    in app.js paste below

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

    in app.scss paste below

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

if you need to modularize your app

composer require caffeinated / modules
php artisan vendor: publish--provider = "Caffeinated\Modules\ModulesServiceProvider" --
tag = "config"

php artisan make: module < module name >
