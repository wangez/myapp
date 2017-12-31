import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './lib'
// default style
import './default.less'

// router
import Router from 'vue-router'
import Home from './components/routerview/Home'
import dyna from './router/dyna-components'

Vue.use(Router)
// register global component

new Vue({
    el: '#app',
    store,
    template: '<App />',
    components: {
        App
    },
    router: new Router({
        mode: 'history',
        routes: [{
                path: '/Home/:search',
                name: 'home',
                component: Home
            },
            {
                path: '/',
                name: 'landing-page',
                component: Home
            }
        ]
    })
})

// Vue.prototype.$http({
//     method: 'post',
//     url: '/api/show/getMenu'
// }).then(e => {
//     store.commit('show/setMenu', e.data)

//     new Vue({
//         el: '#app',
//         store,
//         template: '<App />',
//         components: {
//             App
//         },
//         router: new Router({
//             mode: 'history',
//             routes: [{
//                     path: '/Home',
//                     name: 'home',
//                     component: Home
//                 },
//                 {
//                     path: '/Show',
//                     name: 'show',
//                     component: dyna.Show,
//                     children: e.data.map(m => {
//                         return {
//                             path: '/' + m.name,
//                             name: m.name,
//                             component: dyna[m.name]
//                         }
//                     })
//                 },
//                 {
//                     path: '/',
//                     name: 'landing-page',
//                     component: Home
//                 }
//             ]
//         })
//     })
// })