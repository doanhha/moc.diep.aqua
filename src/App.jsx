import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Infomation from './Components/Infomation'
import ProductsList from './Components/ProductsList'
import HandbookAll from './Layout/HandbookAll'
import Contact from './Layout/Contact'
import Mayloc from './Layout/Mayloc'
import Maysuioxi from './Layout/Maysuioxi'
import Phannen from './Layout/Phannen'
import Denthuysinh from './Layout/Denthuysinh'
import Phukienthuyssinh from './Layout/Phukienthuyssinh'
import Thucancatep from './Layout/Thucancatep'
import Thuocchuabenh from './Layout/Thuocchuabenh'
import Caythuysinh from './Layout/Caythuysinh'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Infomation' element={<Infomation/>} />
       <Route path='/ProductsList' element={<ProductsList/>} />
       <Route path='/HandbookAll' element={<HandbookAll/>} />
       <Route path='/Contact' element={<Contact/>} />
      <Route path='/Mayloc' element={<Mayloc />} />
      <Route path='/Maysuioxi' element={<Maysuioxi />} />
      <Route path='/Phannen' element={<Phannen />} />
      <Route path='/Denthuysinh' element={<Denthuysinh />} />
      <Route path='/Phukienthuyssinh' element={<Phukienthuyssinh />} />
      <Route path='/Thucancatep' element={<Thucancatep />} />
      <Route path='/Thuocchuabenh' element={<Thuocchuabenh />} />
      <Route path='/Caythuysinh' element={<Caythuysinh />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
