import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Infomation from './Components/Infomation'
import ProductsList from './Components/ProductsList'
import HandbookAll from './Layout/HandbookAll'
import Contact from './Layout/Contact'

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
    </Routes>
    </BrowserRouter>
  )
}

export default App
