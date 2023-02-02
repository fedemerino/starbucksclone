import React from 'react'
import Drinks from './Drinks'

const DrinkContainer = ({ title }) => {
  return (
    <div className="drinksContainer">
      <div className='drinkTitle'>
        <p>{title}</p>
      </div>
      <div className='row'>
      <Drinks/>
      </div>
    </div>

  )
}

export default DrinkContainer