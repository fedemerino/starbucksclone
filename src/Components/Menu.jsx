import React from 'react'
import DrinkContainer from './DrinkContainer'
import bebidas from '../assets/bebidas.json'
import encasa from '../assets/encasa.json'
import comida from '../assets/comida.json'
const Menu = () => {
    return (
        <div className='menuContainer'>
            <div className='menuTop'>
                <p className="enjoy">¡Disfrútalos!</p>
                <p className="text">Conoce nuestras bebidas y alimentos de temporada</p>
            </div>
            <DrinkContainer
                title={'Bebidas'} food={bebidas} link={'menu/bebidas'}
            />
            <DrinkContainer
                title={'Comida'} food={comida} link={'menu/comida'}
            />
            <DrinkContainer
                title={'En casa'} food={encasa} link={'menu/en-casa'}
            />
        </div>
    )
}

export default Menu