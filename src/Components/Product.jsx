import React from 'react'

const Product = ({ data }) => {
  return (
    <>
      <div className='productContainer'>
        <img src={data.img} alt={data.img} />
        <span className='productName'>{data.name}</span>
      </div>
      <div className='productDescriptionContainer'>
        <span className='productDescription'>{data.detail}</span>
      </div>
    </>
  )
}

export default Product