import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './lib'
// default style
import './default.less'

new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    template: '<App/>'
})