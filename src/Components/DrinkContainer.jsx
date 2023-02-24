import React from 'react'
import Drinks from './Drinks'
import {context} from './CustomProvider'
import { useContext } from 'react'
const DrinkContainer = ({ title, food, link }) => {
  const {buttonState} = useContext(context)
  return (
    <div className="drinksContainer" style={{position: buttonState&&'relative', zIndex: buttonState&&'-1'}}>
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