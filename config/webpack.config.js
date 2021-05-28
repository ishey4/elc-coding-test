"use strict";
const path = require('path');
console.log("path!!!!", path.resolve(__dirname, '../app/services/'))
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
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']                     
                    }
                }
            }
        ]
    }
};
