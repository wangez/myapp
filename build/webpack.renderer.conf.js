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
            '@': path.join(__dirname, '../src/renderer'),
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.js', '.vue', '.json', '.css', '.node']
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
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
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