import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Infomation from './Components/Infomation'
import ProductsList from './ProductCompilation/ProductsViewAll/ProductsList'
import HandbookAll from './Layout/bottom/HandbookAll'
import Contact from './Layout/bottom/Contact'
import Mayloc from './ProductCompilation/Mayloc'
import Maysuioxi from './ProductCompilation/Maysuioxi'
import Phannen from './ProductCompilation/Phannen'
import Denthuysinh from './ProductCompilation/Denthuysinh'
import Phukienthuyssinh from './ProductCompilation/Phukienthuyssinh'
import Thucancatep from './ProductCompilation/Thucancatep'
import Thuocchuabenh from './ProductCompilation/Thuocchuabenh'
import Caythuysinh from './ProductCompilation/Caythuysinh'
import Login from './Components/Login'
import Register from './Components/Register'
import React from 'react'

import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    
      <AuthProvider> 
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Infomation' element={<Infomation />} />
          <Route path='/ProductsList' element={<ProductsList />} />
          <Route path='/HandbookAll' element={<HandbookAll />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Mayloc' element={<Mayloc />} />
          <Route path='/Maysuioxi' element={<Maysuioxi />} />
          <Route path='/Phannen' element={<Phannen />} />
          <Route path='/Denthuysinh' element={<Denthuysinh />} />
          <Route path='/Phukienthuyssinh' element={<Phukienthuyssinh />} />
          <Route path='/Thucancatep' element={<Thucancatep />} />
          <Route path='/Thuocchuabenh' element={<Thuocchuabenh />} />
          <Route path='/Caythuysinh' element={<Caythuysinh />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </AuthProvider>
  )
}

export default App
