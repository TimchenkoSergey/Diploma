const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: {
        app: path.resolve(__dirname, '../', 'src', 'public', 'app', 'index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist', 'public', 'app'),
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader',
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!sass-loader',
                })
            },
        ],
    },
    resolve: {
        modules: ['.', path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.css', '.scss'],
    },
};

module.exports = config;
