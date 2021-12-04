import React, { useEffect, useState } from  'react'
import { useParams, useNavigate } from 'react-router-dom'
import './BancosForm.css'
import axios from 'axios'

function BancosForm() {
    const [banco, setBanco] = useState({
        ban_codigo: '',
        ban_descricao: '',
        ban_apelido: '',
        ban_numero: '',
        ban_ativoinativo: ''
    })
    const params = useParams()
    const navigate = useNavigate()
    const [novoBanco, setNovoBanco] = useState('normal')
    const [titulo, setTitulo] = useState('')

    useEffect(() => {
        getBanco()
    }, [])

    async function getBanco() {
        if(params.codigo) {
            setNovoBanco('normal')
            setTitulo('Editar Banco')
            const { data } = await axios.get(`http://localhost:3005/banco/consultar/${params.codigo}`)

            setBanco ({
                ban_codigo: data[0].ban_codigo,
                ban_descricao: data[0].ban_descricao,
                ban_apelido: data[0].ban_apelido,
                ban_numero: data[0].ban_numero,
                ban_ativoinativo: data[0].ban_ativoinativo,
            })
        }
        else {
            setNovoBanco('none')
            setTitulo('Cadastrar Banco')
        }
    }

    function handleInputChange(event, property) {
        const dadosInput = {...banco}
    
        if(event.target.id) property = event.target.id

        dadosInput[property] = event.target.value

        setBanco(dadosInput)
    }

    async function salvarDados() {
        try {
            if (params.codigo) {
                await axios.put(`http://localhost:3005/banco/editar/${params.codigo}`, banco)
                
                console.log("Alteração salva no banco")
            }
            else {
                console.log("Inclusão de Registro!")
                await axios.post('http://localhost:3005/banco/novo', banco)
            }
        }
        catch(error) {
            console.error(error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (banco.ban_descricao.length === 0) {
            alert('Insira uma descrição válida')
        }
        else {
            salvarDados()
        }
    }

    return (
        <div className="bancos-form">
            <form className="form-ban" onSubmit={handleSubmit}>
                <h2>{titulo}</h2>
                <div className="container-div-ban">
                    <div className="codigo-div-ban" style={ {display: novoBanco} }>
                        <label>Código</label>
                        <input
                            id="ban_codigo"
                            type="number"
                            onChange={handleInputChange}
                            value={banco.ban_codigo}
                            disabled={true}
                        />
                    </div>

                    <div className="ativoinativo-div-ban" style={ {display: novoBanco} }>
                        <label>A/I</label>
                        <input
                            id="ban_ativoinativo"
                            type="text"
                            onChange={handleInputChange}
                            value={banco.ban_ativoinativo}
                            disabled={true}
                        />
                    </div>

                    <div className="descricao-div-ban">
                        <label>Descrição</label>
                        <input
                            id="ban_descricao"
                            type="text"
                            onChange={handleInputChange}
                            value={banco.ban_descricao}
                        />
                    </div>

                    <div className="apelido-div-ban">
                        <label>Apelido</label>
                        <input
                            id="ban_apelido"
                            type="text"
                            onChange={handleInputChange}
                            value={banco.ban_apelido}
                        />
                    </div>

                    <div className="numero-div-ban">
                        <label>Número</label>
                        <input
                            id="ban_numero"
                            type="text"
                            onChange={handleInputChange}
                            value={banco.ban_numero}
                        />
                    </div>

                    <div className="botoes-div-ban">
                        <button type="submit">Salvar</button>
                        <button onClick={ () => navigate("/bancos") }>Voltar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BancosForm