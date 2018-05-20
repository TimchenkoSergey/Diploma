const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        index: path.resolve(__dirname, 'src/app.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    },
    target: 'node',
};

module.exports = config;
