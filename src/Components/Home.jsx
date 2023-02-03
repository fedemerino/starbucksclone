import React from 'react'
import HomeSection from './HomeSection'
const Home = () => {
  return (
    <div className='homeContainer'>
      <HomeSection
        w={"87.5rem"}
        h={"25.5rem"}
        bg={"#d4e9e2"}
        imgPos={'left'}
        img={'./pistacho.png'}
        alt={'pistacho'}
        className={'sectionImg'}
        content={true}
        contentTitle={"¡Hay pistacho para todos!"}
        contentText={"Conocé todas las novedades del verano"}
        contentButton={"Más información"}
        styles={{
          'color': '#00754a',
          'fontSize': '3.125rem',
          'fontWeight': '600',
          'maxWidth': '30rem',
          'textAlign': 'center'
        }}

      />
      {/* <HomeSection
        w={"87.5rem"}
        h={"32.rem"}
        bg={"#D4E9E254"}
        imgPos={'right'}
        img={'./vivicadamomento.jpg'}
        alt={'vivicadamomento'}
        className={'sectionImg'}
        content={true}
        contentText={"ENCONTRÁ ESE MOMENTO IDEAL PARA HACER UNA PAUSA Y DISFRUTAR TU BEBIDA FAVORITA"}
        contentButton={"DESCUBRÍ LO NUEVO"}
        styles={{
          'color' : '#006241'
        }}
      /> */}
    </div>
  )
}

export default Home