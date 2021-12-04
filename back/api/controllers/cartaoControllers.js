const cartaoModels = require('../models/cartaoModels.js')

module.exports = {
    cartaoMenu,
    cartaoGetAll,
    cartaoGetById,
    cartaoAtivoInativo,
    cartaoEditar,
    cartaoNovo
}

function cartaoMenu(req, res) {
    res.json('Rota Cartão (Projeto Final)!')
}

function cartaoGetAll(req, res) {
    cartaoModels.getAllCartao(function(err, resposta) {
        if(err) {
            throw err
        }
        else {
            res.json(resposta)
        }
    })
}

function cartaoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parâmetro esperado: ' + id)

    cartaoModels.getByIdCartao(id, function(err, resposta) {
        if(err) {
            throw err
        }
        else {
            res.json(resposta)
        }
    })
}

function cartaoAtivoInativo(req, res) {
    const id = req.params.codigo
    let status = ""
    console.log('Parâmetro esperado: ' + id)

    cartaoModels.getByIdCartao(id, function(err, resposta) {
        console.log('Ativar/Inativar Cartão {MODEL}\n', resposta[0].crt_ativoinativo)
        status = resposta[0].crt_ativoinativo;
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
        cartaoModels.ativarInativar(id, status, function(err, result) {
            if(err) {
                throw err
            }
            console.log("Cartão atualizado!")
            res.redirect(`/cartao/consultar/${id}`)
        })
    })
}

function cartaoEditar(req, res) {
    const dados = req.body
    console.log(dados)

    let codigoBanco = ""

    cartaoModels.getIdBanco(dados.ban_apelido, function(err, result) {
        if(result.length === 0 || result === undefined) {
            console.log("Banco não cadastrado")
        }
        else {
            codigoBanco = result[0].ban_codigo
            console.log(codigoBanco)

            cartaoModels.editarCartao(dados, codigoBanco, function(err, result) {
                if(err) {
                    throw err
                }
                //res.redirect('/cartao')
            })
        }
    })
}

function cartaoNovo(req, res) {
    const dados = req.body
    dados.crt_codigo = null
    dados.crt_ativoinativo = 'A'
    console.log(dados)

    cartaoModels.getIdBanco(dados.ban_apelido, function(err, result) {
        if(result.length === 0 || result === undefined) {
            console.log("Banco não cadastrado")
        }
        else {
            codigoBanco = result[0].ban_codigo

            cartaoModels.novoCartao(dados, codigoBanco, function(err, result) {
                if(err) {
                    throw err
                }
                res.redirect('/cartao')
            })
        }
    })
}