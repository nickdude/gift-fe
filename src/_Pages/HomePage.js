import React from 'react'
import Baner from '../Components/Baner/Baner'
import Footer from '../Components/Footer/Footer'
import GetInTouch from '../Components/GetInTouch/GetInTouch'
import Nav from '../Components/Nav/Nav'

const HomePage = () => {
  return (
    <>
    <Nav color='blue'/>
    <Baner label='Welcome to prima gifting'/>
    <GetInTouch color='blue'/>
    <Footer/>
    </>
  )
}

export default HomePage