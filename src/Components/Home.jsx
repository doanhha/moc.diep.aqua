import React from 'react'
import Banner from '../Layout/Top/Banner'
import Producttop from '../ProductCompilation/ProductsViewAll/Producttop'
import Products from '../ProductCompilation/ProductsViewAll/Products'
import Products2 from '../ProductCompilation/ProductsViewAll/Products2'
import Products3 from '../ProductCompilation/ProductsViewAll/Products3'
import Products4 from '../ProductCompilation/ProductsViewAll/Products4'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Banner/>
      <Producttop/>
      <Products/>
      <Products2/>
      <Products3/>
      <Products4/>
      <Footer/>
    </>
  )
}

export default Home
