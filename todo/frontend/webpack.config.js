const webpack  = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
    },
    devServer: {
        port: 8080, 
        contentBase: './public'
    },
    resolve: {
        extensions: ['','js', 'jsx'],
        alias: {
            //Cria uma alias para o diretório node_modules 
            //Assim  se quisermos referenciar uma bliblioteca, poderemos fazer
            //desta forma:   modules/bootstrap/dist...
            modules: __dirname +  '/nome_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread'] 
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}