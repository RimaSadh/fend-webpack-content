const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',

    entry: './src/client/index.js', //regex matcher; the $ at the end simply means that nothing comes after that.

    module: {
        rules: [ // array of loaders
                { // Loader to get Webpack use Babel
                    test: '/\.js$/', // look for every .js file in our project
                    exclude: /node_modules/, // but not any file inside the (node_modules) folder
                    loader: "babel-loader" // give a name for the loader
                }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
   

}


