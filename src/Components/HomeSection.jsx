import React from 'react'
import HomeSectionContent from './HomeSectionContent'

const HomeSection = ({ w, h, bg, imgPos, img, alt, className, content, contentTitle, contentText,contentButton, styles }) => {
  return (
    <div className='home'
      style={{
        'width': w,
        'height': h,
        'backgroundColor': bg
      }}>
      <div className="homeSectionLeft">
        {imgPos == 'left' ? <img src={img} alt={alt} className={className} /> :
          content == true ? <HomeSectionContent styles={styles} contentTitle={contentTitle} contentText={contentText} contentButton={contentButton} /> : null}
      </div>
      <div className="homeSectionRight">
        {imgPos == 'right' ? <img src={img} alt={alt} className={className} /> :
          content == true ? <HomeSectionContent styles={styles} contentTitle={contentTitle} contentText={contentText} contentButton={contentButton}/> : null}
      </div>
    </div>
  )
}

export default HomeSection