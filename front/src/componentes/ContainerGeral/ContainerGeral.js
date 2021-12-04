import React from  'react'
import './ContainerGeral.css'

import ContainerSuperior from '../ContainerSuperior/ContainerSuperior.js'
import AreaDados from '../AreaDados/AreaDados.js'
import Rodape from '../Rodape/Rodape.js'

function ContainerGeral() {
    return (
        <div className="containerGeral">
            <ContainerSuperior />
            <AreaDados />
            <Rodape />
        </div>
    )
}

export default ContainerGeral