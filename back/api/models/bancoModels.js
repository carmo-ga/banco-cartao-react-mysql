const conexao = require('../../config/conexao.js')

module.exports = {
    getAllBanco,
    getByIdBanco,
    ativarInativar,
    editarBanco,
    novoBanco
}

function getAllBanco(callback) {
    conexao.query('SELECT * FROM banco', callback)
}

function getByIdBanco(id, callback) {
    conexao.query('SELECT * FROM banco WHERE ban_codigo = ' + id, callback)
}

function ativarInativar(id, status, callback) {
    const str_sql = "UPDATE banco SET ban_ativoinativo = '" + status + "' WHERE ban_codigo = '" + id + "'";
    conexao.query(str_sql, callback)
}

function editarBanco(dados, callback) {
    const m_sql = "UPDATE banco SET ban_descricao = '" + dados.ban_descricao + "', ban_apelido = '" + dados.ban_apelido + "', ban_numero = '" + dados.ban_numero + "', ban_ativoinativo = '" + dados.ban_ativoinativo + "' WHERE ban_codigo = '" + dados.ban_codigo + "'";
    conexao.query(m_sql, callback)
}

function novoBanco(dados, callback) {
    const m_sql = "INSERT INTO banco SET ?"
    conexao.query(m_sql, dados, callback)
}