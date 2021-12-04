const mysql = require('mysql2')
const database = 'dados212n'

// Instanciar objeto de acesso ao banco de dados
const conexao = mysql.createConnection({
    user: 'root',
    password: '', // Informar a senha
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar no mysql...', err)
        return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão efetivada com sucesso!')
})

module.exports = conexao