import React from 'react'

const Drink = ({ name, img }) => {
    return (
        <div className='col col-lg-4 drinkContainer'>
            <div className='drinkCircle'>
                <img src={img} alt={name} />
            </div>
        </div>
    )
}

export default Drink