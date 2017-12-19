const files = require.context('.', false, /\.vue/)

const views = {}

files.keys().forEach(file => {
    views[file.replace(/\.\/|\.vue/g, '')] = files(file).default
})

export default views