import React, { useContext } from "react";
import { context } from "./CustomProvider";

import Foods from "./Foods";
import { Link } from "react-router-dom";
const FoodsContainer = ({ variants, title, data }) => {
  const { buttonState } = useContext(context);
  return (
    <div
      className="menuContainer"
      style={{
        margin: buttonState && "0 1rem 0 1rem",
        padding: buttonState && "6.75rem 0 0 0",
      }}
    >
      <div className="menuTop">
        <Link to={"/menu"}>
          <span className="ruta">Menú</span>
        </Link>
        <span style={{ fontWeight: "600", color: "rgba(0,0,0,.58)" }}>
          {" "}
          / {title}
        </span>
        <p className="text">{title}</p>
      </div>
      <Foods variants={variants} data={data} />
    </div>
  );
};

export default FoodsContainer;
