import React, { useContext } from 'react'
import DrinkContainer from './DrinkContainer'
import bebidas from '../assets/bebidas.json'
import encasa from '../assets/encasa.json'
import comida from '../assets/comida.json'
import {context} from './CustomProvider'
const Menu = () => {
    const {buttonState} = useContext(context)
    return (
        <div className='menuContainer' style={{margin: buttonState&&'0 1rem 0 1rem',
        padding:buttonState&&'6.75rem 0 0 0'}}>
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