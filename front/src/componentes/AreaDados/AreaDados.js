import React from 'react'
import './AreaDados.css'
import { Routes, Route } from 'react-router-dom'
import Bancos from '../Bancos/Bancos.js'
import Cartoes from '../Cartoes/Cartoes.js'
import BancosForm from '../BancosForm/BancosForm.js'
import CartoesForm from '../CartoesForm/CartoesForm.js'

function AreaDados() {
    return (
        <div className="areaDados">
            <Routes>
                {/* <Route exact path="/" element={}></Route> */}
                <Route exact path="/bancos" element={<Bancos />}></Route>
                <Route exact path="/cartoes" element={<Cartoes />}></Route>
                <Route exact path="/banco/editar/:codigo" element={<BancosForm />}></Route>
                <Route exact path="/banco/novo" element={<BancosForm />}></Route>
                <Route exact path="/cartao/editar/:codigo" element={<CartoesForm />}></Route>
                <Route exact path="/cartao/novo" element={<CartoesForm />}></Route>
            </Routes>
        </div>
    )
}

export default AreaDados