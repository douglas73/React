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
 7. Executamos o webpack  ( npm run dev )

## Primeiro Componente 

 1. Criamos um arquivo component.jsx (path: /ex) com o seguinte conteúdo:

> import React from 'react'
> 
> function () {
>     return <h1>Primeiro Componente!</h1>
> }

*Nota*

Repare que nesta arquivo não importamos o react-dom,  pois não vamos utilizar recursos do dom com react.

 2. No arquivo index.jsx importamos o nosso componente  com import Component from './component.jsx'
 3. Substituimos a linha ReactDom.render(<h1>Olá React</h1>, document.getElementById('app')) por 
 ReactDom.render(<Component /> , document.getElementById('app')), que é a referencia do componente que está sendo criado.

 *Nota*

 Neste momento,   colocamos a referencia ao componente com a extensão .jsx (vamos remover isso no futuro.)

 4. Ao executar o script,  um erro é gerado, informando que não reconhece function (do componente)
    Para isso, devemos export na function do component.jsx,  desta forma:
    de: 
  
        function () {
            return <h1>Primeiro Componente!</h1>
        }    

    para:
  
    export default function () {
        return <h1>Primeiro Componente!</h1>
    }
 
 ### Removendo extensão jsx dos componentes

  1. Ate o momento usamos para referenciar o componente a extensão .jsx no import (import Component from './component.jsx').  
  2. Mas vamos remover esta extensão e configurar o webpack para interpretar a leitura destes aquivos sem especificação da extensão. E para isso,  colocamos mais uma configuração no nosso webpack.config.js:

    resolve: {
        extensions: ['', '.js', '.jsx']
    }, 

  3. Rodamos mais uma veis o webpack (npm run dev)


  ## Primeiro Componente (Arrow Function)

  1. O Arrow Function é um padrão de escrita de funções a ser seguido..

    No nosso exemplo, o nosso componente pode ser escrito de varias formas,  vamos a elas...

    Basico:

    export default function () {
        return <h1>Primeiro Componente! CDTS</h1>
    }    

    Ou assim: 

    export default  () => {
        return <h1>Primeiro Componente! CDTS</h1>
    }   

    Ou assim:

    export default () => (
        <h1>Primeiro Componente! CDTS</h1> 
    )  

    *Nota*  

    Nesta última forma,  o parêntesis não significa que é a chave da função (function () {bla bla})  e sim apenas  com um container onde incluiremos o retorno da função,   que é implícito(não precisamos do termo return)

  ## Propriedades do componente

    Os componentes recebem parametros que são passados por referencia na tag.
    entao, vamos alterar o nosso componente para que ele receba um parâmetro...

    Ficará assim:

    export default (props) => (
        <h1>{props.value}</h1> 
    )

    que também podemos escrever assim, pois neste caso só existe um parâmetro...
    export default props => (
        <h1>{props.value}</h1> 
    )    

    e index.jsx colocamos os valor para o parametro:  ReactDom.render(<Component value='Primeiro Componente'/>, document.getElementById('app'))

    O retorno será o mesmo.



    



