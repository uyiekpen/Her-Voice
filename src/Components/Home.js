import React from 'react'
import Header from './Header'
import HomeComp from './HomeComp'
import About from './About'
import Why from "./Why"
import Success from './Success'
import Event from './Event'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'





const Home = () => {
  return (
    <div>
        <Header/>
        <HomeComp/>
        <About/>
        <Why/>
        <Success/>
        <Event/>
        <Team/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
