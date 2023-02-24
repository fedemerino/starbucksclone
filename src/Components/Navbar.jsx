import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "./CustomProvider";

const Navbar = () => {
  const { buttonState, handleButton } = useContext(context);
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches && buttonState) {
      handleButton();
    }
  });

  return (
    <div
      className="navbarContainer"
      style={{
        background: buttonState ? "white" : null,
        position: buttonState ? "fixed" : "inherit",
      }}
    >
      {buttonState ? (
        <div className="buttonNavbarContainer">
          <div className="buttonNavbarOpacity" onClick={handleButton}></div>
          <div className="buttonNavbar">
            <div className="buttonNavbarMenu">
              <ul className="buttonNavbarUL">
                <li>
                  <Link to={"/menu"}>MENÚ</Link>
                </li>
                <li>
                  <Link to={"/articulo/lets-talk-coffee"}>CAFÉ</Link>
                </li>
                <li>
                  <Link to={"/seccion/experiencia-starbucks"}>
                    EXPERIENCIA STARBUCKS
                  </Link>
                </li>
              </ul>
            </div>
            <div className="localizarTiendaMenu">
              <a href="https://www.starbucks.com.ar/stores" target={"_blank"}>
                <div className="localizarTiendaMenuIcon">
                  <img
                    src="/pin.svg"
                    alt="pin"
                    style={{ height: "1.275rem" }}
                  />{" "}
                  <p style={{ "padding-left": "5px" }}>Localizar Tienda</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : null}

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
            {buttonState ? (
              <img src="/close.svg" alt="" onClick={() => handleButton()} />
            ) : (
              <img src="/menu.svg" alt="" onClick={() => handleButton()} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
