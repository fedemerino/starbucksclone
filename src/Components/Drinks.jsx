import React, { useContext } from 'react'

import Drink from './Drink'

const Drinks = ({food,link}) => {
  return (
    food.map((eachFood) => {
        return <Drink key={eachFood.name} {...eachFood} link={link}/>
    })
  )
}

export default Drinks