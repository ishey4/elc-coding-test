"use strict";
const path = require('path');

module.exports = {
    
    output: {
        filename: "[name].min.js"
    },    

    devtool: 'source-map',
    resolve: {
        alias: {
            services: path.resolve(__dirname, '../app/services/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react','@babel/preset-typescript'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']                     
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};
