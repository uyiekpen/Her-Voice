import React from 'react'
import Header from './Header'
import HomeComp from './HomeComp'
import About from './About'
import Why from "./Why"
import Success from './Success'




const Home = () => {
  return (
    <div>
        <Header/>
        <HomeComp/>
        <About/>
        <Why/>
        <Success/>
    </div>
  )
}

export default Home
