import React from "react";
import HomeSection from "./HomeSection";
const ExperienciaStarbucks = () => {
  return (
    <div className="experienciaStarbucksContainer">
      <div className="homeContainer">
        <div className="experienciaStarbucksTitleContainer">
          <p className="experienciaStarbucksTitle">Experiencia Starbucks</p>
        </div>
      </div>
      <p className="experienciaStarbucksSectionTitle">
        Para cada momento hay una forma de vivir la Experiencia Starbucks como
        vos quieras.
      </p>
      <HomeSection
        w={"75rem"}
        h={"21.875rem"}
        bg={"#f2f0eb"}
        imgPos={"right"}
        img={"/instore.png"}
        alt={"instore"}
        className={"sectionImg"}
        content={true}
        contentTitle={"In Store"}
        contentText={
          "En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable."
        }
        styles={{
          color: "#212529",
          fontSize: "1.875rem",
          fontWeight: "600",
          textFontSize: "1.18rem",
          textFontWeight: "400",
          maxWidth: "30rem",
          textAlign: "center",
          buttonFontSize: "1rem",
          marginTop: "1rem",
        }}
      />
      <HomeSection
        w={"75rem"}
        h={"21.875rem"}
        bg={"#f2f0eb"}
        imgPos={"left"}
        img={"/drivethru.png"}
        alt={"drivethru"}
        className={"sectionImg"}
        content={true}
        contentTitle={"Drive Thru"}
        contentText={
          "Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto."
        }
        styles={{
          color: "#212529",
          fontSize: "1.875rem",
          fontWeight: "600",
          textFontSize: "1.18rem",
          textFontWeight: "400",
          maxWidth: "30rem",
          textAlign: "center",
          buttonFontSize: "1rem",
          marginTop: "1rem",
        }}
      />
      <HomeSection
        w={"75rem"}
        h={"21.875rem"}
        bg={"#f2f0eb"}
        imgPos={"left"}
        img={"/delivery.png"}
        alt={"Delivery"}
        className={"sectionImg"}
        content={true}
        contentTitle={"Delivery"}
        contentText={
          "Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya."
        }
        contentButton={"Pedí Delivery"}
        link={'//www.pedidosya.com.ar/cadenas/starbucks'}
        styles={{
          color: "#212529",
          fontSize: "1.875rem",
          fontWeight: "600",
          textFontSize: "1.18rem",
          textFontWeight: "400",
          maxWidth: "30rem",
          textAlign: "center",
          buttonFontSize: "1rem",
          marginTop: "1rem",
        }}
      />
    </div>
  );
};

export default ExperienciaStarbucks;
