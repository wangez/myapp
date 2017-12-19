const Webpack = require('webpack');
const webpackconfig = require('./webpack.renderer.conf')
const WebpackDevServer = require('webpack-dev-server')

const config = require('../config/config')

const {dev: {devServerPort}, main: {mainServerPort}} = config

const options = {
    proxy: {  // webpackdevserver代理，api请求代理到后端服务
        "/api": `http://localhost:${mainServerPort}`
    },
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
    stats: {
        colors: true
    }
};

WebpackDevServer.addDevServerEntrypoints(webpackconfig, options);

const compiler = Webpack(webpackconfig);
const server = new WebpackDevServer(compiler, options);

server.listen(devServerPort, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${devServerPort}`);
    require('../index.js') // 启动后端服务
});