import React, { useEffect, useState } from  'react'
import { useNavigate } from 'react-router-dom'
import './Bancos.css'
import axios from 'axios'

function Bancos() {
    const navigate = useNavigate()
    const [dados, setDados] = useState([])

    useEffect(() => {
        listarBancos()
    }, [])

    async function listarBancos() {
        await axios.get('http://localhost:3005/banco/listar')
            .then(response => setDados(response.data))
    }

    async function ativarInativar(id) {
        await axios.get(`http://localhost:3005/banco/ativoInativo/${id}`)
        listarBancos()
    }

    return (
        <div className="bancos">
            <section className="section-bancos" id="exibeDados">
                <h2>Listagem de Bancos</h2>
                <table id="tabela">
                    <thead>
                        <tr>
                            <th id="codigo">Código</th>
                            <th id="descricao">Descrição</th>
                            <th id="apelido">Apelido</th>
                            <th id="numero">Número</th>
                            <th id="ativoinativo">A/I</th>
                            <th id="novo" colSpan={2}><button onClick={ () => navigate('/banco/novo') }>Novo Banco</button></th>
                        </tr>
                    </thead>
                    <tbody>

                        {dados.map(item =>
                            <tr key={item.ban_codigo}>
                                <td id="c_codigo">{item.ban_codigo}</td>
                                <td id="c_descricao">{item.ban_descricao}</td>
                                <td id="c_apelido">{item.ban_apelido}</td>
                                <td id="c_numero">{item.ban_numero}</td>
                                <td id="c_ativoinativo">{item.ban_ativoinativo}</td>

                                <td id="c_editar"><button onClick={ () => navigate(`/banco/editar/${item.ban_codigo}`) }>Editar</button></td>
                                <td id="c_a-inativar"><button onClick={ () => ativarInativar(item.ban_codigo) }>Inativar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Bancos