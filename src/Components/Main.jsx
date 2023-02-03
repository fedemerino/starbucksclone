import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import FoodContainer from './FoodContainer'
const Main = () => {
  return (
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/menu/bebidas/:id' element={<FoodContainer />}></Route>
          <Route path='/menu/comida/:id' element={<FoodContainer />}></Route>
          <Route path='/menu/en-casa/:id' element={<FoodContainer />}></Route>
        </Routes>
  )
}

export default Main