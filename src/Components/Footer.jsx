import React, { useState } from "react";

const Footer = () => {
  const [sobreNosotrosButton, setSobreNosotrosButton] = useState(false);
  const [impactoSocialButton, setImpactoSocialButton] = useState(false);
  const [atencionButton, setAtencionButton] = useState(false);
  const [experienciaButton, setExperienciaButton] = useState(false);

  const handleButton = (state, setState) => {
    setState(!state);
  };

  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerContainer">
          <div className="aboutUs">
            <div className="footerTitle">
              <p>Sobre nosotros</p>
              <img
                src="/arrow-down.svg"
                alt=""
                onClick={() =>
                  handleButton(sobreNosotrosButton, setSobreNosotrosButton)
                }
              />
            </div>
            {sobreNosotrosButton
              ? null
              : [
                  <>
                    <p>Nuestra historia</p>
                    <p>Nuestra misión</p>
                    <p>Nuestra cultura inclusiva y valores</p>
                    <p>Nuestro café</p>
                    <p>Historias y novedades</p>
                    <p>Comunicados oficiales</p>
                  </>,
                ]}
          </div>
          <div className="socialImpact">
            <div className="footerTitle">
              <p>Impacto social</p>
              <img
                src="/arrow-down.svg"
                alt=""
                onClick={() =>
                  handleButton(impactoSocialButton, setImpactoSocialButton)
                }
              />
            </div>
            {impactoSocialButton
              ? null
              : [
                  <>
                    <p>Planeta</p>
                    <p>Personas</p>
                  </>,
                ]}
          </div>
          <div className="support">
            <div className="footerTitle">
              <p>Atención al cliente</p>
              <img
                src="/arrow-down.svg"
                alt=""
                onClick={() => handleButton(atencionButton, setAtencionButton)}
              />
            </div>
            {atencionButton
              ? null
              : [
                  <>
                    <p>Contacto</p>
                    <p>Medios de pago</p>
                    <p>Defensa de las y los consumidores</p>
                  </>,
                ]}
          </div>
          <div className="experience">
            <div className="footerTitle">
              <p>Experiencia Starbucks</p>
              <img
                src="/arrow-down.svg"
                alt=""
                onClick={() =>
                  handleButton(experienciaButton, setExperienciaButton)
                }
              />
            </div>
            {experienciaButton
              ? null
              : [
                  <>
                    <p>Formas de comprar</p>
                    <p>Delivery</p>
                  </>
                ]}
          </div>
          <div>&nbsp;</div>
          <div className="dataFiscal">
            <a
              href="http://qr.afip.gob.ar/?qr=mXre0uzPRZp2FyKAW3LfRQ,,"
              target={"_blank"}
            >
              <img src="../../datafiscal.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="socialMediaContainer">
        <div className="media">
          <a
            href="https://www.facebook.com/StarbucksArgentina"
            target={"_blank"}
          >
            <img src="../../facebook.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/starbucksargentina/"
            target={"_blank"}
          >
            <img src="../../instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/starbucks-coffee-argentina/"
            target={"_blank"}
          >
            <img src="../../linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <div className="terms">
          <p>Accesibilidad web</p>
          <p>Aviso de privacidad</p>
          <p>Condiciones de uso</p>
          <p>Mapa del sitio</p>
        </div>
        <div className="rights">
          <p>Ⓒ 2023. Starbucks Cofee Company. Reservados todos los derechos</p>
          <p>
            ar | prod | 2ae52fb44f27f520b08945c714a81c97894a566a |
            27/12/2022-04:56:23:027
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
