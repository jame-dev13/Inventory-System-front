import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"

export const LayoutProtectedPages = () => {
  return (
    <>
      <div className='row g-0'>
        <Navbar />
      </div>
      <Outlet />
      <div className='row g-0'>
        <Footer />
      </div>
    </>
  )
}
