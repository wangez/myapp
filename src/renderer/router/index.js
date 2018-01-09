// router
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import dyna from './dyna-components'
import ShowArticles from '../components/ShowArticles'
import ShowGames from '../components/ShowGames'

Vue.use(Router)
// register global component

export default new Router({
    mode: 'history',
    routes: [{
            path: '/home',
            name: 'home',
            component: Home,
            props: route => ({search: route.query.search})
        },
        {
            path: '/',
            name: 'landing-page',
            component: Home,
            props: route => {
                return {search: undefined}
            }
        },
        {
            path: '/articles/:name',
            name: 'showArticles',
            component: ShowArticles,
            props: true
        },
        {
            path: '/games/:name',
            name: 'showGames',
            component: ShowGames,
            props: true
        }
    ]
})