import React from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='MainApp'>
          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/Shop' element={<Shop />}></Route>
            <Route path='/Product' element={<Product />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App