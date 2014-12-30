var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.cwd());

var config = {
    entry: './app/main.js',
    output: {
        path: "./public",
        filename: "bundle.js"
    },
    cache: true,
    module: {
        loaders: [
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css"},
            {test: /\.useable\.css$/, loader: "style/useable!css"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"},
            {test: /\.js$/, loader: 'jsx-loader'},
            {test: /\.html$/, loader: 'file?name=[name].[ext]'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({title: 'Demo'})
    ]
};


if (process.env.NODE_ENV == 'production') {
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;
