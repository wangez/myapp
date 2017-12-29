/*
 * @Author: wangez 
 * @Date: 2017-12-25 16:24:53 
 * @Last Modified by: wangez
 * @Last Modified time: 2017-12-29 13:32:57
 * 注册异步加载组件
 * 供webpack打包使用
 * 只能手动注册
 */
import Vue from 'vue'
const Show = () => import(/* webpackChunkName: "/show" */ '../components/routerview/Show')
const Login = () => import ( /* webpackChunkName: "/login" */ '../components/Login')

const css = () => import(/* webpackChunkName: "/css" */ '../components/show/css')

Vue.component('Login', Login)
export default {
    Show,
    Login,
    css
}