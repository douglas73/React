# React - CRIAÇÃO DO PRIMEIRO TODO LIST
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

