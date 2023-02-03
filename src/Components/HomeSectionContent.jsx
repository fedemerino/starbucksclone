import React from 'react'

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
            <div className='contentButton' style={{
                'color': styles.color,
                'border': '1px solid ' + styles.color,
            }}>
                {contentButton}
            </div>
        </>
    )
}

export default HomeSectionContent