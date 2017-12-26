import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//import icon
import 'vue-awesome/icons/user-circle'
import 'vue-awesome/icons/user'
import Icon from 'vue-awesome/components/Icon'

import './default.less'


import Router from 'vue-router'

import Home from './components/routerview/Home'
import dyna from './router/dyna-components'


Vue.use(Router)

Vue.component('icon', Icon)

Vue.component(
    'Login',
    () =>
    import ( /* webpackChunkName: "/login" */ './components/Login')
)

Vue.prototype.$http = axios

axios({
    method: 'post',
    url: '/api/show/getMenu'
}).then(e => {
    console.log(e.data)

    const routes = [{
            path: "/Home",
            name: "home",
            component: Home
        },
        {
            path: "/Show",
            name: "show",
            component: dyna.Show
        },
        {
            path: "/",
            name: "landing-page",
            component: Home
        }
    ]

    new Vue({
        store,
        router: new Router({
            mode: 'history',
            routes
        }),
        template: '<App />',
        components: {
            App
        }
    }).$mount('#app')
})