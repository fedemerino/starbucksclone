import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Link to={"/"}>
          <img src="/starbucks.svg" alt="starbuckslogo" />
        </Link>
        <ul className="menu">
          <li>
            <Link to={"/menu"} className={"navMenu"}>
              MENÚ
            </Link>
          </li>
          <Link to={"/#"} className={"navMenu"}>
            CAFÉ
          </Link>
          <li>
            <Link to={"/#"} className={"navExp"}>
              EXPERIENCIA STARBUCKS
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbarRight">
        <a href="https://www.starbucks.com.ar/stores" target={"_blank"}>
          <div className="localizarTienda">
            <img src="/pin.svg" alt="pin" style={{ height: "1.275rem" }} />{" "}
            <p style={{ "padding-left": "5px" }}>Localizar Tienda</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
