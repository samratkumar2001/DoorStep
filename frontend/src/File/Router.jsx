import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../Component/About'
import Home from '../Component/Home'
import Contact from '../Component/Contact'
import Service from '../Component/Service'
import Nav from './Nav'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router