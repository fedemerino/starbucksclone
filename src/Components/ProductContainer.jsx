import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import cafescalientes from '/src/bebidas/cafescalientes/cafescalientes.json'
import cafeshelados from '/src/bebidas/cafeshelados/cafeshelados.json'
import calientes from '/src/bebidas/calientes/calientes.json'
import frappuccino from '/src/bebidas/frappuccino/frappuccino.json'
import heladas from '/src/bebidas/heladas/heladas.json'
import tecaliente from '/src/bebidas/tecaliente/tecaliente.json'
import tehelado from '/src/bebidas/tehelado/tehelado.json'
import bakery from '/src/comida/bakery/bakery.json'
import sandwich from '/src/comida/sandwich/sandwich.json'
import snacks from '/src/comida/snacks/snacks.json'
import cafeengranos from '/src/encasa/cafeengranos/cafeengranos.json'
import te from '/src/encasa/te/te.json'

const ProductContainer = () => {
    const { id } = useParams();
    let productos = cafescalientes.flat().concat(cafeshelados.flat()).concat(calientes.flat()).concat(frappuccino.flat()).concat(heladas.flat()).concat(tecaliente.flat()).concat(tehelado.flat()).concat(bakery.flat()).concat(sandwich.flat()).concat(snacks.flat()).concat(cafeengranos.flat()).concat(te.flat())
    
    let data = productos.find((prod) => prod.id === id)

    return (
        <Product data={data}/>
    )
}

export default ProductContainer