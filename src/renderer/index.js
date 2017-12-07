import Vue from 'vue'
import App from './App.vue'
import router from './router'
import state from './state'
import './default.less'

new Vue({
    el: '#app',
    state,
    router,
    template: '<App />',
    components: {
        App
    }
})