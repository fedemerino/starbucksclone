import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
const Main = () => {
  return (
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
        </Routes>
  )
}

export default Main