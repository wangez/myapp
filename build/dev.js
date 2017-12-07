const Webpack = require('webpack');
const webpackconfig = require('./webpack.renderer.conf')
const WebpackDevServer = require('webpack-dev-server')

const options = {
    proxy: {
        "/api": "http://localhost:3000"
    },
    hot: true,
    host: 'localhost',
    stats: {
        colors: true
    }
};

WebpackDevServer.addDevServerEntrypoints(webpackconfig, options);

const compiler = Webpack(webpackconfig);
const server = new WebpackDevServer(compiler, options);

server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');

    require('../index.js')
});