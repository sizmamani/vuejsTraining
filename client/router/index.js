import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import Home from 'views/Home'



Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        component: Login,
        name: 'login'
    }, {
        path: '/home/',
        component: Home,
        name: 'home',
    }]
})