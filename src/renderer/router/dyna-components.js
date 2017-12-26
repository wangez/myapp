/*
 * @Author: wangez 
 * @Date: 2017-12-25 16:24:53 
 * @Last Modified by: wangez
 * @Last Modified time: 2017-12-26 09:06:30
 * 注册异步加载组件
 * 供webpack打包使用
 * 只能手动注册
 */
const Show = () => import(/* webpackChunkName: "/show" */ '../components/routerview/Show')
const Login = () => import ( /* webpackChunkName: "/login" */ '../components/Login')

export default {
    Show,
    Login
}