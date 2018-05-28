const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/components/pages/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash:6].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: 'true',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                ],
                test: /\.css$/,
            },
            {
                use: ['style-loader', 'css-loader', 'less-loader'],
                test: /\.less$/,
            },
            // this rule handles images
            {
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                use: 'file-loader?name=[name].[ext]?[hash]',
            },

            // the following 3 rules handle font extraction
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },

            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf',
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Star Wars',
            template: './public/index.html',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            '../../theme.config$': path.join(__dirname, 'theme/theme.config'),
        },
    },
};
