/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
const path = require('path');
const webpackMmerge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = webpackMmerge(common, {
    mode: 'production', // "production" | "development" | "none"
    entry: './src/modules/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'xjar.js',
        library: 'xjar',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'source-map',
    context: __dirname,
    target: 'web',
    stats: 'errors-only', // lets you precisely control what bundle information gets displayed
    plugins: [],
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom'
        }
    }
});
