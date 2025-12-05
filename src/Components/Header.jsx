import React from 'react'
import Topbar from '../Layout/Topbar'
import Menu from '../Layout/Menu'
import Banner from '../Layout/Banner'
import SearchLogo from '../Layout/SearchLogo'

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
