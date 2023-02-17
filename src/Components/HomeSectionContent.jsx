import React from 'react'
import CustomButton from './CustomButton'
const HomeSectionContent = ({ styles, contentText, contentTitle, contentButton }) => {
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
                    'color': styles.color,
                }}>
                    {contentText}
                </p>
            </div>
            <CustomButton contentButton={contentButton} styles={styles} />
        </>
    )
}

export default HomeSectionContent