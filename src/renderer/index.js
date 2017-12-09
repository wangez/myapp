import Vue from 'vue'
import App from './App.vue'
import router from './router'
import state from './state'
import axios from 'axios'
import './default.less'

Vue.prototype.$http = axios

new Vue({
    el: '#app',
    state,
    router,
    template: '<App />',
    components: {
        App
    }
})