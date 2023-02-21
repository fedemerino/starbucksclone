import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
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
            <Link to={"/articulo/lets-talk-coffee"} className={"navCafe"}>
              CAFÉ
            </Link>
            <li
              style={{
                minWidth: "205px",
              }}
            >
              <Link to={"/seccion/experiencia-starbucks"} className={"navExp"}>
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
          <div className="sandwichButton">
            <img src="/menu.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
