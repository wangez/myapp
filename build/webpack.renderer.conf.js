const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/renderer/index.js',
    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'public/index-[hash].js',
        chunkFilename: 'public/[name].chunk.js',
        publicPath: '/'
    },
    devtool: 'none',
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src/renderer'),
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.js', '.vue', '.json', '.css', '.node']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }, {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'public/[name]--[folder].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/renderer/index.html"
        })
    ]
}