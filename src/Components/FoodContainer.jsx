import React from 'react'
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
import { useParams } from 'react-router-dom'
import FoodsContainer from './FoodsContainer'

const FoodContainer = () => {
    let { id } = useParams()


    switch (id) {
        case 'cafes-calientes': return <FoodsContainer variants={['Lattes', 'Cappuccinos', 'Flat White', 'Americanos', 'Macchiatos', 'Mochas', 'Café filtrado']} title={"Cafés calientes"} data={cafescalientes} /> 

        case 'cafes-helados': return <FoodsContainer variants={['Shaken Espresso', 'Macchiatos', 'Cappuccinos', 'Lattes', 'Cold Brews', 'Americanos', 'Mochas', 'Café filtrado']} title={"Cafés helados"} data={cafeshelados} />

        case 'calientes': return <FoodsContainer variants={['Chocolates']} title={'Calientes'} data={calientes} /> 

        case 'frappuccino': return <FoodsContainer variants={['Frappuccino® con café', 'Frappuccino® sin café']} title={'Frappuccino®'} data={frappuccino} /> 

        case 'frias': return <FoodsContainer variants={['Refreshers', 'Jugos, aguas y bebidas saborizadas']} title={'Heladas'} data={heladas} /> 

        case 'te-caliente': return <FoodsContainer variants={['Té Verde', 'Té Chai', 'Infusiones', 'Té Negro']} title={'Té caliente'} data={tecaliente} /> 

        case 'te-helado':  return <FoodsContainer variants={['Té Herbal helado', 'Té Verde helado']} title={'Té helado'} data={tehelado} /> 

        case 'bakery': return <FoodsContainer variants={['Recién horneados', 'Croissants, Rolls & más', 'Salados', 'Muffins', 'Budines', 'Tortas']} title={'Bakery'} data={bakery} /> 

        case 'almuerzos': return <FoodsContainer variants={['Sándwichs & más']} title={'Sándwichs & preparados'} data={sandwich} /> 

        case 'snacks': return <FoodsContainer variants={['Frutos secos & más', 'Chocolates', 'Biscotti & Cookies']} title={'Snacks'} data={snacks} /> 

        case 'cafe-en-granos': return <FoodsContainer variants={['Tostado Blonde', 'Tostado Medio', 'Tostado Oscuro']} title={'Café en granos'} data={cafeengranos} /> 

        case 'te': return <FoodsContainer variants={['Infusiones', 'Té Chai', 'Té Negro', 'Té Verde']} title={'Té'} data={te} /> 
    }
}

export default FoodContainer