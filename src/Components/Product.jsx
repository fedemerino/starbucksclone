import React,{useContext} from 'react'
import {context} from './CustomProvider'
const Product = ({ data }) => {
  const {buttonState} = useContext(context)
  return (
    <div style={{paddingTop:buttonState&&'4.375rem'}}>
      <div className='productContainer'>
        <img src={data.img} alt={data.img} />
        <span className='productName'>{data.name}</span>
      </div>
      <div className='productDescriptionContainer'>
        <span className='productDescription'>{data.detail}</span>
      </div>
    </div>
  )
}

export default Product