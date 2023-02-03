import React from 'react'
import Drinks from './Drinks'

const DrinkContainer = ({ title, food, link }) => {
  return (
    <div className="drinksContainer">
      <div className='drinkTitle'>
        <p>{title}</p>
      </div>
      <div className='row'>
        <Drinks food={food} link={link} />
      </div>
    </div>

  )
}

export default DrinkContainer