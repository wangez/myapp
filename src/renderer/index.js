import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//import icon
import 'vue-awesome/icons/user-circle'
import 'vue-awesome/icons/user'
import Icon from 'vue-awesome/components/Icon'

import './default.less'

Vue.component('icon', Icon)

Vue.prototype.$http = axios

new Vue({
    store,
    router,
    template: '<App />',
    components: {
        App
    }
}).$mount('#app')