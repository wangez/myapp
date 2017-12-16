import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import modules from './modules'



Vuex.Store.prototype.$http = axios

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    strict: true
})