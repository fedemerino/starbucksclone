import React from 'react'
import CafeSectionImg from './CafeSectionImg'
import CafeSectionText from './CafeSectionText'
import CafeSectionTitle from './CafeSectionTitle'
import CustomButton from './CustomButton'

const Cafe = () => {
    return (
        <div className='mainCafe'>
            <div className='cafeTitleContainer'>
                <p className='cafeTitle'>Nuestro café</p>
            </div>
            <div className='cafeSection'>

                <CafeSectionText text={'El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo.'} />
                <CafeSectionImg img={'/nuestrocafe.png'} />
                <CafeSectionText text={'De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares. '} />
                <CafeSectionText text={'Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos.'} />
                <CafeSectionTitle text={'Nuestro tostado Starbucks'} size={'30px'} />
                <CafeSectionText text={'Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. '} />
                <CafeSectionImg img={'/curvadetostado.jpg'} />
                <CafeSectionTitle text={'Rubio'} size={'1.5rem'} />
                <CafeSectionText text={'El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves'} />
                <CafeSectionTitle text={'Medio'} size={'1.5rem'} />
                <CafeSectionText text={'El café con tostado medio es balanceado con sabores agradables y enriquecidos.'} />
                <CafeSectionTitle text={'Oscuro'} size={'1.5rem'} />
                <CafeSectionText text={'Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. '} />
                <CafeSectionTitle text={'Descubre los métodos de preparación en Starbucks, ¿Cuál es el correcto para vos?'} size={'30px'} />
                <CafeSectionText text={'Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo. '} />
                <CafeSectionImg img={'/metodos.png'} />
                <CafeSectionText text={'Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks.'} />
                <CustomButton styles={{
                    color:'black',
                    fontSize:'1rem',
                    marginBottom: '4rem'
                }}
                contentButton={'Conocé nuestros métodos'}/>
            </div>
        </div>
    )
}

export default Cafe