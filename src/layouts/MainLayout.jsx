import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
        <Outlet/>
      <Footer></Footer>
    </>
  )
}

export default MainLayout
