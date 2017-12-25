import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/routerview/Home'
const Show = () => import(/* webpackChunkName: "/show" */ '../components/routerview/Show')

Vue.use(Router)

const routes = [
    {path: "/Home", name: "home", component: Home},
    {path: "/Show", name: "show", component: Show},
    {path: "/", name: "landing-page", component: Home}

]

export default new Router({
    mode: 'history',
    routes
})