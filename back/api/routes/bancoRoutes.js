const controllerBanco = require('../controllers/bancoControllers.js')

server.get('/banco', controllerBanco.bancoMenu)

server.get('/banco/listar', controllerBanco.bancoGetAll)

server.get('/banco/consultar/:codigo', controllerBanco.bancoGetById)

server.get('/banco/ativoInativo/:codigo', controllerBanco.bancoAtivoInativo)

server.put('/banco/editar/:codigo', controllerBanco.bancoEditar)

server.post('/banco/novo', controllerBanco.bancoNovo)