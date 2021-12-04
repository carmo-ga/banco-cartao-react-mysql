import React, { useEffect, useState } from  'react'
import { useNavigate } from 'react-router-dom'
import './Cartoes.css'
import axios from 'axios'

function Cartoes() {
    const navigate = useNavigate()
    const [dados, setDados] = useState([])

    useEffect(() => {
        listarCartoes()
    }, [])

    async function listarCartoes() {
        await axios.get('http://localhost:3005/cartao/listar')
            .then(response => setDados(response.data))
    }

    async function ativarInativar(id) {
        await axios.get(`http://localhost:3005/cartao/ativoInativo/${id}`)
        listarCartoes()
    }

    return (
        <div className="cartoes">
            <section className="section-cartoes" id="exibeDados">
                <h2>Listagem de Cartões</h2>
                <table id="tabela">
                    <thead>
                        <tr>
                            <th id="codigo">Código</th>
                            <th id="titular">Titular</th>
                            <th id="descricao">Descrição</th>
                            <th id="validade">Validade</th>
                            <th id="limite">Limite</th>
                            <th id="melhor_dia">Melhor Dia</th>
                            <th id="banco">Banco</th>
                            <th id="ativoinativo">A/I</th>
                            <th id="novo" colSpan={2}><button onClick={ () => navigate('/cartao/novo') }>Novo Cartão</button></th>
                        </tr>
                    </thead>
                    <tbody>

                        {dados.map(item =>
                            <tr key={item.crt_codigo}>
                                <td id="c_codigo">{item.crt_codigo}</td>
                                <td id="c_titular">{item.crt_titular}</td>
                                <td id="c_descricao">{item.crt_descricao}</td>
                                <td id="c_validade">{item.crt_validade}</td>
                                <td id="c_limite">{item.crt_limite}</td>
                                <td id="c_melhor_dia">{item.crt_melhordia}</td>
                                <td id="c_banco">{item.ban_apelido}</td>
                                <td id="c_ativoinativo">{item.crt_ativoinativo}</td>

                                <td id="c_editar"><button onClick={ () => navigate(`/cartao/editar/${item.crt_codigo}`) }>Editar</button></td>
                                <td id="c_a-inativar"><button onClick={ () => ativarInativar(item.crt_codigo) }>Inativar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Cartoes