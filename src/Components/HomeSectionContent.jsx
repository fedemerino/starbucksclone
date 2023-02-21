import React from 'react'
import CustomButton from './CustomButton'
const HomeSectionContent = ({ styles, contentText, contentTitle, contentButton, link }) => {
    return (
        <>
            <div className="contentTitle">
                <p style={{
                    color: styles.color,
                    fontSize: styles.fontSize,
                    fontWeight: styles.fontWeight,
                    maxWidth: styles.maxWidth,
                    textAlign: styles.textAlign
                }}>
                    {contentTitle}
                </p>
            </div>
            <div className="contentText">
                <p style={{
                    color: styles.color,
                    fontSize: styles.textFontSize,
                    fontWeight: styles.textFontWeight,
                    marginTop: styles.textMarginTop
                    
                }}>
                    {contentText}
                </p>
            </div>
            {contentButton?<CustomButton contentButton={contentButton} styles={styles} link={link} />:null}
        </>
    )
}

export default HomeSectionContent