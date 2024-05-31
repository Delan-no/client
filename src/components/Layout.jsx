import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header/>
            <div className='max-w-5xl mx-auto lg:max-w-7xl '>
              <Outlet />
            </div>
        <Footer/>
    </>
  )
}

export default Layout