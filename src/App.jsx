import React from 'react';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Gallery from './components/gallery/Gallery'
import Joincommunity from './components/joincommunity/Joincommunity'
import Footer from './components/footer/Footer'
import Ourservices from './components/services/Ourservices'
import Howitworks from './components/howitworks/Howitworks'
import Testimonials from './components/whatstudentssay/Testimonials'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Thankyou from './components/thankyou/Thankyou'
import Payment from './components/payment/Payment'

function HomePage() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Ourservices/>
    <Howitworks/>
    <Testimonials/>
    <Gallery/>
    <Joincommunity/>
    <Footer/>
    </>
  )
}

function App(){
  return(
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
        <Route path='/payments' element={<Payment/>}/>
      </Routes>
  )

}

export default App
