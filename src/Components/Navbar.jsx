import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarLeft">
                <img src="/starbucks.svg" alt="starbuckslogo" />
                <ul className='menu'>
                    <li>MENÚ</li>
                    <li>CAFÉ</li>
                    <li>EXPERIENCIA STARBUCKS</li>
                </ul>
            </div>
            <div className="navbarRight">
                <a href="https://www.starbucks.com.ar/stores" target={'_blank'}><div className='localizarTienda'>
                    <img src="/pin.svg" alt="pin" style={{ 'height': '1.275rem' }} /> <p style={{'padding-left':'5px'}}>Localizar Tienda</p>
                </div></a>
            </div>
        </div>
    )
}

export default Navbar