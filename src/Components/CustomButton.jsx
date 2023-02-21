import React from "react";
import { Link } from "react-router-dom";
const CustomButton = ({ styles, contentButton, link }) => {
  return (
    <>
      <Link to={link}>
        <div
          className="contentButton"
          style={{
            color: styles.color,
            border: "1px solid " + styles.color,
            width: "fit-content",
            fontSize: styles.buttonFontSize,
            marginBottom: styles.marginBottom,
            paddingBottom:styles.paddingBottom,
            marginTop: styles.marginTop
          }}
        >
          {contentButton}
        </div>
      </Link>
    </>
  );
};

export default CustomButton;
