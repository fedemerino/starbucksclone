import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from './CustomProvider'
const Drink = ({ name, img, link, id}) => {
    const {buttonState} = useContext(context);
    let address = `/${link}/${id}`
    return (

        <div className='col col-lg-4 col-md-6 col-sm-6 col-6 drinkContainer'>
            <Link to={address}>
                <div className='drinkCircle'>
                    <img src={img} alt={name} style={{transform: buttonState?'none':'scale(0.85)'}} />
                </div>
            </Link>
            <div className='drinkName'>
                <p style={{
                    fontWeight: '600',
                    fontSize: '1.2rem'
                }}
                >
                    {name}</p>
            </div>
        </div>

    )
}

export default Drink