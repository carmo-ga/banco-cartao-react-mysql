import React, { useEffect, useState } from  'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CartoesForm.css'
import axios from 'axios'

function CartoesForm() {
    const [cartao, setCartao] = useState({
        crt_codigo: '',
        crt_titular: '',
        crt_descricao: '',
        crt_validade: '',
        crt_limite: '',
        crt_melhordia: '',
        ban_apelido: '',
        crt_ativoinativo: ''
    })
    const params = useParams()
    const navigate = useNavigate()
    const [novoCartao, setNovoCartao] = useState('normal')
    const [titulo, setTitulo] = useState('')

    useEffect(() => {
        getCartao()
    }, [])

    async function getCartao() {
        if(params.codigo) {
            setNovoCartao('normal')
            setTitulo("Editar Cartão")
            const { data } = await axios.get(`http://localhost:3005/cartao/consultar/${params.codigo}`)

            setCartao ({
                crt_codigo: data[0].crt_codigo,
                crt_titular: data[0].crt_titular,
                crt_descricao: data[0].crt_descricao,
                crt_validade: data[0].crt_validade,
                crt_limite: data[0].crt_limite,
                crt_melhordia: data[0].crt_melhordia,
                ban_apelido: data[0].ban_apelido,
                crt_ativoinativo: data[0].crt_ativoinativo,
            })
        }
        else {
            setNovoCartao('none')
            setTitulo("Cadastrar Cartão")
        }
    }

    function handleInputChange(event, property) {
        const dadosInput = {...cartao}
    
        if(event.target.id) property = event.target.id

        dadosInput[property] = event.target.value

        setCartao(dadosInput)
    }

    async function salvarDados() {
        try {
            if (params.codigo) {
                await axios.put(`http://localhost:3005/cartao/editar/${params.codigo}`, cartao);
                navigate("/cartoes")
            }
            else {
                console.log("Inclusão de Registro!")
                await axios.post('http://localhost:3005/cartao/novo', cartao)
            }
        }
        catch(error) {
            console.error(error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (cartao.crt_titular.length === 0) {
            alert('Insira um titular.')
        }
        else {
            salvarDados()
        }
    }

    return (
        <div className="cartoes-form">
            <form className="form-crt" onSubmit={handleSubmit}>
                <h2>{titulo}</h2>
                <div className="container-div-crt">
                    <div className="form-row"  style={ {display: novoCartao} }>
                        <div className="codigo-div-crt">
                            <label>Código</label>
                            <input
                                id="crt_codigo"
                                type="number"
                                onChange={handleInputChange}
                                value={cartao.crt_codigo}
                                disabled={true}
                            />
                        </div>
                        
                        <div className="ativoinativo-div-crt">
                            <label>A/I</label>
                            <input
                                id="crt_ativoinativo"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.crt_ativoinativo}
                                disabled={true}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="titular-div-crt">
                            <label>Titular</label>
                            <input
                                id="crt_titular"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.crt_titular}
                            />
                        </div>

                        <div className="descricao-div-crt">
                            <label>Descrição</label>
                            <input
                                id="crt_descricao"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.crt_descricao}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="validade-div-crt">
                            <label>Validade</label>
                            <input
                                id="crt_validade"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.crt_validade}
                            />
                        </div>

                        <div className="limite-div-crt">
                            <label>Limite</label>
                            <input
                                id="crt_limite"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.crt_limite}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="melhordia-div-crt">
                            <label>Melhor Dia</label>
                            <input
                                id="crt_melhordia"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.crt_melhordia}
                            />
                        </div>

                        <div className="banco-apelido-div-crt">
                            <label>Banco</label>
                            <input
                                id="ban_apelido"
                                type="text"
                                onChange={handleInputChange}
                                value={cartao.ban_apelido}
                            />
                        </div>
                    </div>

                    <div className="botoes-div-crt">
                        <button type="submit">Salvar</button>
                        <button onClick={ () => navigate("/cartoes") }>Voltar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CartoesForm