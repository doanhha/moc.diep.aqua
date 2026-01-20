import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';

import Header from './Components/Header';
import Home from './Components/Home';
import Infomation from './Components/Infomation';
import HandbookAll from './Layout/bottom/HandbookAll';
import Contact from './Layout/bottom/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import CategoryPage from './Pages/CategoryPage';
import CartPage from './Pages/CartPage';
import ProductDetail from './Components/ProductDetail';


const App = () => {
  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Infomation' element={<Infomation />} />
        <Route path='/HandbookAll' element={<HandbookAll />} />
        <Route path='/Contact' element={<Contact />} />

        {/* Route danh mục động */}
        <Route path='/danh-muc/:slug' element={<CategoryPage />} />
        <Route path='/Mayloc' element={<Navigate to='/danh-muc/may-loc' replace />} />
        <Route path='/Maysuioxi' element={<Navigate to='/danh-muc/may-sui-oxy-bom-may-suoi' replace />} />
        <Route path='/Phannen' element={<Navigate to='/danh-muc/phan-nen-cot-nen-thuy-sinh' replace />} />
        <Route path='/Denthuysinh' element={<Navigate to='/danh-muc/den-thuy-sinh' replace />} />
        <Route path='/Phukienthuyssinh' element={<Navigate to='/danh-muc/phu-kien-thuy-sinh-khac' replace />} />
        <Route path='/Thucancatep' element={<Navigate to='/danh-muc/thuc-an-cho-ca-tep' replace />} />
        <Route path='/Thuocchuabenh' element={<Navigate to='/danh-muc/thuoc-chua-benh-cho-ca-tep' replace />} />
        <Route path='/Caythuysinh' element={<Navigate to='/danh-muc/cay-thuy-sinh' replace />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/product/:slug' element={<ProductDetail />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
