import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import cafescalientes from './images/bebidas/cafescalientes/cafescalientes.json'
import cafeshelados from './images/bebidas/cafeshelados/cafeshelados.json'
import calientes from './images/bebidas/calientes/calientes.json'
import frappuccino from './images/bebidas/frappuccino/frappuccino.json'
import heladas from './images/bebidas/heladas/heladas.json'
import tecaliente from './images/bebidas/tecaliente/tecaliente.json'
import tehelado from './images/bebidas/tehelado/tehelado.json'
import bakery from './images/comida/bakery/bakery.json'
import sandwich from './images/comida/sandwich/sandwich.json'
import snacks from './images/comida/snacks/snacks.json'
import cafeengranos from './images/encasa/cafeengranos/cafeengranos.json'
import te from './images/encasa/te/te.json'

const ProductContainer = () => {
    const { id } = useParams();
    let productos = cafescalientes.flat().concat(cafeshelados.flat()).concat(calientes.flat()).concat(frappuccino.flat()).concat(heladas.flat()).concat(tecaliente.flat()).concat(tehelado.flat()).concat(bakery.flat()).concat(sandwich.flat()).concat(snacks.flat()).concat(cafeengranos.flat()).concat(te.flat())
    
    let data = productos.find((prod) => prod.id === id)

    return (
        <Product data={data}/>
    )
}

export default ProductContainer