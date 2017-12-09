const buildConfig = require('./webpack.build.conf')
const webpack = require('webpack')
const del = require('del')

del.sync(['public/*'])

webpack(buildConfig, (err, b) => {
    if (err) {
        console.log(err)
    } else {
        console.log('renderer over')
    }
})