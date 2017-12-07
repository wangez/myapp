/*
 * @Author: wangez 
 * @Date: 2017-12-07 17:14:39 
 * @Last Modified by: wangez
 * @Last Modified time: 2017-12-07 17:22:47
 */
/*
* webpack提供require.context方法帮助引用文件夹下的模块
* 这个文件让state/index.js文件可以一次性引用所有vuex模块
* 没有任何里有修改这个文件
*/
const files = require.context('.', false, /^\.\/(?!index).*\.js$/)
const modules = {}

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '').toLowerCase()] = files(key).default
})

export default modules