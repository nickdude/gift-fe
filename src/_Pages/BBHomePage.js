import React from 'react'
import Baner from '../Components/Baner/Baner'
import Footer from '../Components/Footer/Footer'
import GetInTouch from '../Components/GetInTouch/GetInTouch'
import LatestArrivals from '../Components/LatestArrivals/LatestArrivals'
import Nav from '../Components/Nav/Nav'
import ProductCategories from '../Components/ProductCategories/ProductCategories'
import Testimonials from '../Components/Testimonials/Testimonials'

const BBHomePage = () => {
  return (
    <>
    <Nav/>
    <Baner label='Corporate Gifting Made Easy'/>
    <LatestArrivals/>
    <ProductCategories/>
    <Testimonials/>
    <GetInTouch/>
    <Footer/>
    </>
  )
}

export default BBHomePage