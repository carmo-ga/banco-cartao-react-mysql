import React from  'react'
import './MenuHorizontal.css'

import { Link } from 'react-router-dom'

function MenuHorizontal() {
    return (
        <div className="menuHorizontal">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/bancos">Bancos</Link></li>
                    <li><Link to="/cartoes">Cartões</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuHorizontal