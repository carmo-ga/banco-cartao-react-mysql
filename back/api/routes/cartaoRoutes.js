const controllerCartao = require('../controllers/cartaoControllers.js')

server.get('/cartao', controllerCartao.cartaoMenu)

server.get('/cartao/listar', controllerCartao.cartaoGetAll)

server.get('/cartao/consultar/:codigo', controllerCartao.cartaoGetById)

server.get('/cartao/ativoInativo/:codigo', controllerCartao.cartaoAtivoInativo)

server.put('/cartao/editar/:codigo', controllerCartao.cartaoEditar)

server.post('/cartao/novo', controllerCartao.cartaoNovo)