const express = require('express')
const consign = require('consign')
const cors = require('cors')
const body = require('body-parser')

server = express()

server.use(cors())
server.use(body.json())

server.set('porta', 3005)

consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)

module.exports = server