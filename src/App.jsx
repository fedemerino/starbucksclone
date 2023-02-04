import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/_Main.scss'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Main />
        <Footer />
    </BrowserRouter>
  )
}

export default App
