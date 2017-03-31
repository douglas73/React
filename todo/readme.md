# React - CRIAÇÃO DO PRIMEIRO TODO LIST (BACKEND)
----
Estudo sobre o React com a criação de um sistema de TODO LIST;

## Dependencias

Iniciamos o projeto da criação do do TODO LIST preparando o ambiente:

 1. Criamos um diretorio chamado todo e dentro dele o sub-diretório backend
 2. No diretório backend iniciamos o npm para criação do package.json
        * iniciando configuração do webpack: 
    
        npm init -y

### Declarando dependencias

 >    Neste exemplo declaramos as dependencias com versões específicas só por uma questão de compatibilidade do codigo.  Estas depencias são de desenvolvimento...


       * Executamos no terminal
       npm i --save-dev body-parser@1.15.2
       npm i --save-dev express@4.14.0
       npm i --save-dev mongoose@4.7.0
       npm i --save-dev node-restful@0.2.5
       npm i --save-dev pm2@2.1.5
       npm i --save-dev nodemon@1.11.0

>Em ambiente Windows,  os comandos devem ser executados separadamente.  Mas em Linux/Macs pode-se usar a combinação de comandos da seguinte forma: npm i --save-dev body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 dev pm2@2.1.5 nodemon@1.11.0

## Alterando confiuguraçõe do package.json

No package.json altere as segtuintes configurações:
       * Package.json
       
           {
            "name": "backend",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
              "keywords": [],
              "author": "",
              "license": "ISC",
              "devDependencies": {
                "body-parser": "^1.15.2",
                "express": "^4.14.0",
                "mongoose": "^4.7.0",
                "node-restful": "^0.2.5",
                "nodemon": "^1.11.0",
                "pm2": "^2.1.5"
              }
            }
 
 
Aleteramos as seguintes linhas:
       * De "main": "index.js",  para
       
       "main": "scr/loader.js",


       * De  "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            
       * Para:
         "scripts": {
            "dev": "nodemon",
            "production": "pm2 start src/loader.js --name todo-app"
        },
    
### Configurando Servidor Express (servidor web)

Agora vamos configurar o servidor express, responsavel por .. 

 -  Criamos o diretorio **src**, e dentro dela um diretorio **config**
 -   Dentro do diretório src,  criamos o arquivo loader.js
 -   Dentro do dirertório config,  criamos o arquivo config.js

    * Conteudo do arquivo loader.js
    
    require('./config/server')
    require('./config/database')


       * Conteúdo do arquivo server.js
       
       const port = 3003

        const bodyParser = require('body-parser')
        const express = require('express')
        const server = express()
        
        server.use(bodyParser.urlencoded({ extended: true}))
        server.use(bodyParser.json())
        
        server.listen(port, function() {
            console.log(`BACKEND esta executando na porta ${port}`)
        })
 Agora,  vamos testar o sevidor executando:
        * Executando servidor
        
        npm run dev
 -  Pronto!

       *  O retorno no terminal deve ser algo parecido com isto:
       
        nodemon
        [nodemon] 1.11.0
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching: *.*
        [nodemon] starting `node src/loader.js`
        BACKEND esta executando na porta 3003

### Configurando Banco de Dados (mongodb)

A partir deste momento vamos configurar o mongodb.
 - Criamos um novo arquivo ( *database.js* ) no diretório config.
 - O conteúdo do arquivo database.js é:

       * Conteúdo do arquivo dababase.js
       
       const mongoose = require('mongoose')
        mongoose.Promise = global.Promise
        module.exports = mongoose.connect('mongodb://localhost/todo')
        
No terminal,  iniciamos o mongodb  
       * executando mongodb
       
       mongod

### ODM e criação da API rest

Criamos agora o diretório **api** dentro de **src**.
Também criamos um diretório **todo** dentro de **api**.
Dentro do diretório api\todo,  criamos os arquivos **todo.js** e **todoSevices.js**.

    * Aquivo todo.js:
    
    const restful = require('node-restful')
    const mongoose = restful.mongoose
    
    const todoSchema = new mongoose.Schema({
        description: {  type: String, required: true},
        done: { type: Boolean, required: true, default: false },
        createdAt: { type: Date, default: Date.now }
    })
    
    module.exports = restful.model('Todo', todoSchema)

       * Arquivo todoService.js
       
        const Todo = require('./todo')  
        Todo.methods(['get', 'post', 'put','delete'])
        Todo.updateOptions({new: true,  runValidators: true })
        module.exports = Todo

## Rotas

Vamos aprender a criar e trabalhar com rotas no React.

Dentro do detório config vamos criar um arquivo chamado routes.js

       * route.js:
       
       const express = require('express')

        module.exports = function(server) {  //server é uma instancia de express
            // API Routes
            const router =  express.Router()
            server.use('/api', router)
        
            //TODO Routes
            const todoService = require('../api/todo/todoService')
            todoService.register(router, '/todos')
        
            module.exports = Todo
        }


 - Vamos alterar o arquivo loader.js para :

       * loader.js:
        const server = require('./config/server')
        require('./config/database')
        require('./config/routes')(server) //serve instaciado na linha 1 

 - vamos alterar também o arquivo *server.js*, adicionando a seguinte linha no final do arquivo:  **module.exports = server**:
 
       * server.js: 
       
        const port = 3003

        const bodyParser = require('body-parser')
        const express = require('express')
        const server = express()
        
        server.use(bodyParser.urlencoded({ extended: true}))
        server.use(bodyParser.json())
        
        server.listen(port, function() {
            console.log(`BACKEND esta executando na porta ${port}`)
        })
        
        module.exports = server

### Habilitanto CORS

Vamos criar um arquivo no diretório config chamado **cors.js**. E seu conteúdo é:

       * module.exports = function(req, res, nex) {
            res.header('Access-Control-Allow-Origin','*')
            res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,             Accept')
            next()
        }

Vamos alterar também o arquivo *serve.js* nas linhas  7, adicionando a chamada para o cors (middleware)

       * Adicionando o Cors na linha 7 do *server.js*:
       
       const allowCors = require('./cors')

       * Adicionando o uso cors pelo server (linha 10):
       
       server.use(allowCors)

# React - CRIAÇÃO DO PRIMEIRO TODO LIST (CONFIGURAÇÃO DO FRONTEND)

Vamops iniciar a configuração do frontend.
 1. Criamos o diretório frontend e entramos nele.
 
## Instalando dependencias

 1. Criando package. js


       * npm..
       npm init -y

 2. Instalando as dependencias...

        * Dependencias....
        
        npm i --save webpack@1.14.0
        npm i --save webpack-dev-server@1.16.2
        npm i --save babel-core@6.22.1
        npm i --save babel-loader@6.2.10
        npm i --save babel-plugin-react-html-attrs@2.0.0
        npm i --save babel-plugin-transform-object-rest-spread@6.22.0
        npm i --save babel-preset-es2015@6.22.0
        npm i --save babel-preset-react@6.22.0
        npm i --save extract-text-webpack-plugin@1.0.1
        npm i --save css-loader@0.26.1
        npm i --save style-loader@0.13.1
        npm i --save file-loader@0.9.0
        npm i --save bootstrap@3.3.7
        npm i --save font-awesome@4.7.0
        npm i --save react@15.4.2
        npm i --save react-router@3.0.2
        npm i --save axios@0.15.3

 3. Criamos o arquivo *.gitignore* em frontend para não gravar no repositório alguns arquivos e/ou pastas
    
        * .gitinore:
        
        node_modules
        *.log
