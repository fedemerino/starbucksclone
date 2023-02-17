import React from 'react'

const CustomButton = ({styles,contentButton}) => {
  return (
    <div className='contentButton' style={{
        'color': styles.color,
        'border': '1px solid ' + styles.color,
        width:'fit-content',
        fontSize: styles.fontSize,
        marginBottom: styles.marginBottom
    }}>
        {contentButton}
    </div>
  )
}

export default CustomButton