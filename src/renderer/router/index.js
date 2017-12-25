import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/routerview/Home'
import dyna from './dyna-components'

import axios from 'axios'

Vue.use(Router)

const routes = [
    {path: "/Home", name: "home", component: Home},
    {path: "/Show", name: "show", component: dyna.Show},
    {path: "/", name: "landing-page", component: Home}
]

export default new Router({
    mode: 'history',
    routes
})