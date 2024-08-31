import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeCards from '../Components/HomeCards';
import CustomerSupport from '../Components/CustomerSupport';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services'
import Cart from '../Components/Cart';


const Router = () => {
  return (
    <BrowserRouter>

        <Navbar />

      <Routes>
        <Route path='/' element={<HomeCards />} />
        <Route path='/customersupport' element={<CustomerSupport />} />
        <Route path='/services' element={<Services />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router