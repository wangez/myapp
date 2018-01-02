/*
 * @Author: wangez 
 * @Date: 2017-12-25 16:24:53 
 * @Last Modified by: wangez
 * @Last Modified time: 2018-01-02 16:58:46
 * 注册异步加载组件
 * 供webpack打包使用
 * 只能手动注册
 */
import Vue from 'vue'
const Login = () => import ( /* webpackChunkName: "/login" */ '../components/Login')

Vue.component('Login', Login)
export default {
    Login
}