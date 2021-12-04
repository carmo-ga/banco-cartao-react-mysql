const conexao = require('../../config/conexao.js')

module.exports = {
    getAllCartao,
    getByIdCartao,
    ativarInativar,
    getIdBanco,
    editarCartao,
    novoCartao
}

function getAllCartao(callback) {
    conexao.query(`SELECT C.crt_codigo, C.crt_titular, C.crt_descricao, C.crt_validade, C.crt_limite, C.crt_melhordia, C.crt_ativoinativo, B.ban_apelido
    FROM cartao C
    INNER JOIN banco B
    ON C.ban_codigo = B.ban_codigo`, callback)
}

function getByIdCartao(id, callback) {
    conexao.query(`SELECT C.crt_codigo, C.crt_titular, C.crt_descricao, C.crt_validade, C.crt_limite, C.crt_melhordia, C.crt_ativoinativo, B.ban_apelido
    FROM cartao C
    INNER JOIN banco B
    ON C.ban_codigo = B.ban_codigo
    WHERE C.crt_codigo = ` + id, callback)
}

function ativarInativar(id, status, callback) {
    const str_sql = "UPDATE cartao SET crt_ativoinativo = '" + status + "' WHERE crt_codigo = '" + id + "'";
    conexao.query(str_sql, callback)
}

function getIdBanco(bancoApelido, callback) {
    conexao.query("SELECT ban_codigo FROM banco WHERE ban_apelido = '" + bancoApelido + "'", callback)
}

function editarCartao(dados, bancoCodigo, callback) {
    const m_sql = "UPDATE cartao SET crt_titular = '" + dados.crt_titular + "', crt_descricao = '" + dados.crt_descricao + "', crt_validade = '" + dados.crt_validade + "', crt_limite = '" + dados.crt_limite + "', crt_melhordia = '" + dados.crt_melhordia + "', ban_codigo = '" + bancoCodigo + "', crt_ativoinativo = '" + dados.crt_ativoinativo + "' WHERE crt_codigo = '" + dados.crt_codigo + "'";
    conexao.query(m_sql, bancoCodigo, callback)
}

function novoCartao(dados, bancoCodigo, callback) {    
    const m_sql = "INSERT INTO cartao SET crt_titular = '" + dados.crt_titular + "', crt_descricao = '" + dados.crt_descricao + "', crt_validade = '" + dados.crt_validade + "', crt_limite = '" + dados.crt_limite + "', crt_melhordia = '" + dados.crt_melhordia + "', ban_codigo = '" + bancoCodigo + "', crt_ativoinativo = '" + dados.crt_ativoinativo + "'";
    conexao.query(m_sql, bancoCodigo, callback)
}