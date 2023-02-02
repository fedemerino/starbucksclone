import React from 'react'
import HomeSection from './HomeSection'
const Home = () => {
  return (
    <div className='homeContainer'>
      <HomeSection
        w={"92vw"}
        h={"45vh"}
        bg={"#d4e9e2"}
        imgPos={'left'}
        img={'./momentostarbucks.jpg'}
        alt={'momentostarbucks'}
        className={'sectionImg'}
      />
      <HomeSection
        w={"92vw"}
        h={"55vh"}
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
      />
    </div>
  )
}

export default Home