import Router from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import Loge from '../components/Loge'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {name: 'home', path: 'home', component: Home},
        {name: 'show', path: 'home', component: Home},
        {name: 'comp', path: 'home', component: Home},
        {name: 'loge', path: 'loge', component: Loge}
    ]
});

export default router