import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { Routes,Route } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}
        
        <Hero />
        <Products />
        <Footer />
      {/* <Routes/> */}
    </div>
  )
}

export default Landing