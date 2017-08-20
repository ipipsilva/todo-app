const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded( {extented:true} ))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND esta rodando na porta ${port}`)
})

module.exports = server