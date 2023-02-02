import React from 'react'
import bebidas from '../assets/bebidas/bebidas.json'
import Drink from './Drink'
const Drinks = () => {
  return (
    bebidas.map((bebida) => {
        return <Drink key={bebida.name} {...bebida}/>
    })
  )
}

export default Drinks