import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import FoodContainer from './FoodContainer'
import ProductContainer from './ProductContainer'
import Cafe from './Cafe'
import ExperienciaStarbucks from './ExperienciaStarbucks'
const Main = () => {
  return (
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/menu/bebidas/:id' element={<FoodContainer />}></Route>
          <Route path='/menu/comida/:id' element={<FoodContainer />}></Route>
          <Route path='/menu/en-casa/:id' element={<FoodContainer />}></Route>
          <Route path='/producto/:id' element={<ProductContainer />}></Route>
          <Route path='/articulo/lets-talk-coffee' element={<Cafe />}></Route>
          <Route path='/seccion/experiencia-starbucks' element={<ExperienciaStarbucks/>}></Route>
        </Routes>
  )
}

export default Main