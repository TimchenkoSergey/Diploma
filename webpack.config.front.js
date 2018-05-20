const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        'react-app': path.resolve(__dirname, 'src/public/app/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'build/public/app'),
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
};

module.exports = config;
