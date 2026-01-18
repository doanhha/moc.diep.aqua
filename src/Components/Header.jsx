import React from 'react'
import Topbar from '../Layout/Top/Topbar'
import Menu from '../Layout/Top/Menu'
import Banner from '../Layout/Top/Banner'
import SearchLogo from '../Layout/Top/SearchLogo'

const Header = () => {
  return (
    <>
    <Topbar/>
    <SearchLogo/>
    <Menu/>
    </>
  )
}

export default Header
