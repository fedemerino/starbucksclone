import React from 'react'

const CafeSectionTitle = ({ text, size }) => {
    return (
        <p className='cafeSectionTitle' style={{
            fontSize: size
        }}>
            {text}
        </p>
    )
}

export default CafeSectionTitle