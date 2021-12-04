const http = require('http')
const servidor = require('./config/aplicativo.js')

server.get('/cartao', (req, res) => {
    res.json('Rota Cartão (Projeto Final)!')
})

http.createServer(servidor).listen(servidor.get('porta'), function() {
    console.log("\nServidor rodando na porta " + server.get('porta'))
})