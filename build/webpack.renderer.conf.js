const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/renderer/index.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'index-[hash].js'
    },
    devtool: 'none',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            less: 'vue-style-loader!css-loader!less-loader?indentedSyntax=1',
                        }
                    }
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
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // filename: "../views/index.html",
            template: "./src/renderer/index.html"
        })
    ]
}