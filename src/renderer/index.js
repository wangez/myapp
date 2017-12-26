import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

// import icon
import 'vue-awesome/icons/user-circle'
import 'vue-awesome/icons/user'
import Icon from 'vue-awesome/components/Icon'
// default style
import './default.less'

// router
import Router from 'vue-router'
import Home from './components/routerview/Home'
import dyna from './router/dyna-components'

Vue.use(Router)
// register global component
Vue.component('icon', Icon)
Vue.component('Login', dyna.Login)
Vue.prototype.$http = axios

axios({
    method: 'post',
    url: '/api/show/getMenu'
}).then(e => {
    const show = {
        path: '/Show',
        name: 'show',
        component: dyna.Show,
        children: []
    }
    const routes = [{
            path: '/Home',
            name: 'home',
            component: Home
        }, 
        show,
        {
            path: '/',
            name: 'landing-page',
            component: Home
        }
    ]
    store.commit('show/setMenu', e.data)
    e.data.forEach(m => {
        show.children.push({
            path: '/' + m.name,
            name: m.name,
            component: dyna[m.name]
        })
    })

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