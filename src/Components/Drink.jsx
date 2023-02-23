import React from 'react'
import { Link } from 'react-router-dom'
const Drink = ({ name, img, link, id}) => {
    let address = `/${link}/${id}`
    return (

        <div className='col col-lg-4 col-md-6 col-sm-6 col-6 drinkContainer'>
            <Link to={address}>
                <div className='drinkCircle'>
                    <img src={img} alt={name} />
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