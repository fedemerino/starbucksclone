import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footerTop'>
        <div className="footerContainer">
          <div className="aboutUs">
            <p>Sobre nosotros</p>
            <p>Nuestra historia</p>
            <p>Nuestra misión</p>
            <p>Nuestra cultura inclusiva y valores</p>
            <p>Nuestro café</p>
            <p>Historias y novedades</p>
            <p>Comunicados oficiales</p>
          </div>
          <div className="socialImpact">
            <p>Impacto social</p>
            <p>Planeta</p>
            <p>Personas</p>
          </div>
          <div className="support">
            <p>Atención al cliente</p>
            <p>Contacto</p>
            <p>Medios de pago</p>
            <p>Defensa de las y los consumidores</p>
          </div>
          <div className="experience">
            <p>Experiencia Starbucks</p>
            <p>Formas de comprar</p>
            <p>Delivery</p>
          </div>
          <div>&nbsp;</div>
          <div className='dataFiscal'>
            <a href="http://qr.afip.gob.ar/?qr=mXre0uzPRZp2FyKAW3LfRQ,," target={'_blank'}>
              <img src="datafiscal.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="socialMediaContainer">
        <div className="media">
          <a href="https://www.facebook.com/StarbucksArgentina" target={"_blank"}>
            <img src="facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/starbucksargentina/" target={"_blank"}>
            <img src="instagram.png" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/starbucks-coffee-argentina/" target={"_blank"}>
            <img src="linkedin.png" alt="linkedin" />
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
          <p>ar | prod | 2ae52fb44f27f520b08945c714a81c97894a566a | 27/12/2022-04:56:23:027</p>
        </div>
      </div>
    </div>
  )
}

export default Footer