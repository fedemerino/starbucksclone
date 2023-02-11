import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import cafescalientes from '/bebidas/cafescalientes/cafescalientes.json'
import cafeshelados from '/bebidas/cafeshelados/cafeshelados.json'
import calientes from '/bebidas/calientes/calientes.json'
import frappuccino from '/bebidas/frappuccino/frappuccino.json'
import heladas from '/bebidas/heladas/heladas.json'
import tecaliente from '/bebidas/tecaliente/tecaliente.json'
import tehelado from '/bebidas/tehelado/tehelado.json'
import bakery from '/comida/bakery/bakery.json'
import sandwich from '/comida/sandwich/sandwich.json'
import snacks from '/comida/snacks/snacks.json'
import cafeengranos from '/encasa/cafeengranos/cafeengranos.json'
import te from '/encasa/te/te.json'

const ProductContainer = () => {
    const { id } = useParams();
    let productos = cafescalientes.flat().concat(cafeshelados.flat()).concat(calientes.flat()).concat(frappuccino.flat()).concat(heladas.flat()).concat(tecaliente.flat()).concat(tehelado.flat()).concat(bakery.flat()).concat(sandwich.flat()).concat(snacks.flat()).concat(cafeengranos.flat()).concat(te.flat())
    
    let data = productos.find((prod) => prod.id === id)

    return (
        <Product data={data}/>
    )
}

export default ProductContainer