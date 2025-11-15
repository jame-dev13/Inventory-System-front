import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"
import { SideBar } from '../components/SideBar'

export const LayoutProtectedPages = () => {
  return (
    <div className='row flex-column'>
      <div className='col'>
        <Navbar />
      </div>
      <Outlet />
      <div className='col'>
        <Footer />
      </div>
    </div>
  )
}
