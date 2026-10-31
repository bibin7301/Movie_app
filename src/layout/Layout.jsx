import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet/>
      <Footer/>
    </div>
  )
}
