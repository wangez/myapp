const files = require.context('.', false, /^.+\..+$/)

const assets = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    assets[key.replace(/\.\/|\.jpg|\.png/g, '')] = files(key)
})

export default assets
