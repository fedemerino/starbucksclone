import React from 'react'
import DrinkContainer from './DrinkContainer'

const Menu = () => {
    return (
        <div className='menuContainer'>
            <div className='menuTop'>
                <p className="enjoy">¡Disfrútalos!</p>
                <p className="text">Conoce nuestras bebidas y alimentos de temporada</p>
            </div>
            <DrinkContainer
                title={'Bebidas'}
            />
        </div>
    )
}

export default Menu