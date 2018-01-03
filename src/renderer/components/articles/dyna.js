import Vue from 'vue'

Vue.component('capa', () => import ( /* webpackChunkName: "/capa" */ './capa'))
Vue.component('jsswaper', () => import ( /* webpackChunkName: "/jsswaper" */ './jsswaper'))
Vue.component('gear', () => import ( /* webpackChunkName: "/gear" */ './gear'))
Vue.component('cssswaper', () => import ( /* webpackChunkName: "/cssswaper" */ './cssswaper'))