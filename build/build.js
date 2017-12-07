const rendererconfig = require('./webpack.renderer.conf')
const webpack = require('webpack')
const del = require('del')

del.sync(['public/*'])

rendererconfig.plugins.forEach(plugin => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
        plugin.options.filename = '../views/index.html'
    }
})

rendererconfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
)

webpack(rendererconfig, (err, b) => {
    if (err) {
        console.log(err)
    } else {
        console.log('renderer over')
    }
})