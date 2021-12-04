import React from  'react'
import './ContainerSuperior.css'

import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'

function ContainerSuperior() {
    return (
        <div className="containerSuperior">
            <Cabecalho />
            <MenuHorizontal />
        </div>
    )
}

export default ContainerSuperior