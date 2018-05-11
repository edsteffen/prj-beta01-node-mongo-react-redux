const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())


server.listen(port, function () {
    console.log(`
     ________________________________    
    |   Servidor Backend - STEFFEN   |
    | -> Monitorando porta: [${port}]   |
    |--------------------------------|
    | -> PROJ. MONGO-REACT-REDUX     |
    |________________________________|
    `);
})

module.exports = server