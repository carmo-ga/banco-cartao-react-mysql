const bancoModels = require('../models/bancoModels.js')

module.exports = {
    bancoMenu,
    bancoGetAll,
    bancoGetById,
    bancoAtivoInativo,
    bancoEditar,
    bancoNovo
}

function bancoMenu(req, res) {
    res.json('Rota Banco (Projeto Final)!')
}

function bancoGetAll(req, res) {
    bancoModels.getAllBanco(function(err, resposta) {
        if(err) {
            throw err
        }
        else {
            res.json(resposta)
        }
    })
}

function bancoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parâmetro esperado: ' + id)

    bancoModels.getByIdBanco(id, function(err, resposta) {
        console.log('Retorno da Consulta de Bancos {MODEL}\n', resposta)
        if(err) {
            throw err
        }
        else {
            res.json(resposta)
        }
    })
}

function bancoAtivoInativo(req, res) {
    const id = req.params.codigo
    let status = ""
    console.log('Parâmetro esperado A/I: ' + id)

    bancoModels.getByIdBanco(id, function(err, resposta) {
        console.log('Ativar/Inativar Banco {MODEL}\n', resposta[0].ban_ativoinativo)
        status = resposta[0].ban_ativoinativo

        if(err) {
            throw err
        }
        else {
            if(status == 'A') {
                status = 'I'
            }
            else {
                status = 'A'
            }
        }
        console.log("Ativado/Inativado: " + status)
        bancoModels.ativarInativar(id, status, function(err, result) {
            if(err) {
                throw err
            }
            res.redirect(`/banco/consultar/${id}`)
        })
    })
}

function bancoEditar(req, res) {
    const dados = req.body

    console.log("Estamos no controller")
    console.log(dados)

    bancoModels.editarBanco(dados, function(err, result) {
        if(err) {
            throw err
        }
        //res.redirect('/banco')
    })
}

function bancoNovo(req, res) {
    const dados = req.body
    dados.ban_codigo = null
    dados.ban_ativoinativo = 'A'
    console.log("Estamos no controller novo")
    console.log(dados)

    bancoModels.novoBanco(dados, function(err, result) {
        if(err) {
            throw err
        }
        res.redirect('/banco')
    })
}