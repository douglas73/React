# React
----
Estudo sobre o ReactJS


## Dependencias

1. Iniciamos o webpack em um diretorio novo npm init -y
2. Inslamos as dependencias: (neste caso estamos instalando versoes específica por conta de atualizações gerarem incompatibilidade com o codigos...)

> npm i --save-dev react@15.4.2

> npm i --save-dev react-dom@15.4.2

> npm i --save-dev babel-core@6.22.1

> npm i --save-dev babel-loader@6.2.10

> npm i --save-dev babel-preset-es2015@6.22.0

> npm i --save-dev babel-preset-react@6.22.0

> npm i --save-dev webpack@1.14.0

> npm i --save-dev webpack-dev-server@1.16.2 



## Ajustando Git (ignorando pastas de dependencias)

1. Criamos um aquivo de nome .gitignore com o seguinte conteúdo:
    node_modules
    *.log

 
## Configurando Build com Webpack

1. Criamos na raiz do projeto o arquivo webpack.config.js 
2. A configuração básica do arquivo tem teste conteúdo:

> const webpack = require('webpack') 
> 
> module.exports = {
>     entry: './ex/index.jsx',
>     output: {
>         path: __dirname + '/public',
>         filename: './bundle.js'
>     },
>     devServer: {
>         port: 8080,
>         contentBase: './public',
>     },
>     module: {
>         loaders: [{
>             test: /.jsx?$/,
>             loader: 'babel-loader',
>             exclude: /node_modules/,
>             query: {
>                 presets: ['es2015', 'react']
>             }
>         }]
>     }
> }

3. Criamos o diretório public e criamos o arquivo index.html 
  com uma estrutura basica de html com charset = utf-8 e as tags:

    <div id="app">
    </div>
    <script src='bundle.js'></script>

 Que será o container da resposta do react.

 4. Criamos diretorio ex e criamos o arquivo  index.jsx dentro dele
 5. No arquivo index.jsx inserimos o seguinte conteúdo.
 6. Substituir a linha de teste de package.json para 
    "dev": "webpack-dev-server --progress --colors --inline --hot"




