project setup

```
composer create-project laravel/laravel <project name> {--prefer-dist: optional} {“5.8.*”version}

cd to project
npm install

npm install vue-router vue-axios

npm run dev

php artisan make:controller AppController(name is optional)
```

root->routes directory

comment out all in api.php

***web.php***

```
Route::get('/{any}','AppController@index')->where('any', '.*');
```

***AppController***

```
public function index(){
        return view('welcome');
    }
```
this returns welcome.blade.php

***welcome.blade.php***
```
	<body>
       	<div id="app">
          <App></App>
       	</div>
    	<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
	</body>
```

Here we have renderd App component, it is in app.js in resources directory, so we need to load app.js here
```
<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
```

***app.js***
```
import vue from 'vue';
import router from './router.js'
require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue'


const app = new Vue({
    el: '#app',

    router,

    components:{ 
        App
        }
    });

**if <App></App> doesn’t use in the blade file use here
render:h=>h(App) instead of components:{ App}});
```

create component App.vue (use prefer name)

***App.vue***
```
<template>
    <div class="app">
        <h1>app dot vue</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style  scoped>

</style>
```

create separate js class for routes <route.js use prefer name>

***route.js***
```
import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomerList from "./components/CustomerList";

Vue.use(VueRouter);

export default new VueRouter({
    routes :[
        {
            name: 'customer',
            path:'/customer' ,
            component : CustomerList
           }
    ],
       
    mode:'history'
});
```

*note that I’ve not created CustomerList component. You have to create it.

FrontEnd Scaffolding and adding boostrap

laravel 5.8 and below

```
php artisan preset vue/react
```

laravel 6.x /7.x

```
composer require laravel/ui

//for basic scaffolding

php artisan ui bootstrap
php artisan ui vue
php artisan ui react

//for login/registration scaffolding

php artisan ui bootstrap --auth
php artisan ui vue --auth
php artisan ui react --auth


npm install vue bootstrap - vue bootstrap

if errors occurred in npm run watch
run/ or run only
npm install --save bootstrap-vue

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
```


now we are going to modularize our app

```
composer require caffeinated/modules
php artisan vendor:publish --provider="Caffeinated\Modules\ModulesServiceProvider" --tag="config"

php artisan make: module <module name>

in modules api.php
Route::get('/customer', 'CustomerController@index'); <use ur controller and api names>


regiter interface and repository on appServiceProvider.php
```

Implementing JWT Auth

```
composer require tymon/jwt-auth (after install update composer.json to latest version and compose update)

in config/app.php

 'providers' => [
     ...
    Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
 ]


php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

php artisan jwt:secret
```

in User.php

```
class User extends Authenticatable implements JWTSubject

and pase below 2 functions in the class

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
```

in config/auth.php

```
'defaults' => [
    'guard' => 'api',
    'passwords' => 'users',
],
...

'guards' => [
    'api' => [
        'driver' => 'jwt',
        'provider' => 'users',
    ],
],
```


in api.php

```
Route::group([
    'prefix' => 'auth'
], function () {

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');
Route::get('user', 'AuthController@getAuthUser');

});
```


php artisan make:controller AuthController

```
<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public $loginAfterSignUp = true;

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = auth()->login($user);

        return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
    public function getAuthUser(Request $request)
    {
        return response()->json(auth()->user());
    }
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
```

to catch the errors from frontend add below in the /app/Exceptions/Handler.php render method
```
    if ($exception instanceof ValidationException)
    {
        $response['errors']['validations'] = $exception->errors();
        return response(['data'=>$response])->header('Content-Type', 'application/json');
    }
```

***Madusanka***

