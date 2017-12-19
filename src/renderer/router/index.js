import Vue from 'vue'
import Router from 'vue-router'
import views from '../components/routerview'

Vue.use(Router)
const routes = []

Object.keys(views).forEach(key => {
    const view = views[key]
    routes.push({
        path: '/' + key,
        name: view.name ? view.name : key,
        component: view
    })
})

routes.push({
    path: '/',
    name: 'landing-page',
    component: require('@/components/routerview/Home').default
})

export default new Router({
    mode: 'history',
    routes
})