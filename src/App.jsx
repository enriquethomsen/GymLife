import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Gym } from './components/Gym'
import Training from './components/Training'
import Preis from './components/Preis'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Timetable from './components/Timetable'


function App() {
 

  return (
    <div className=' scroll-smooth'>
     <Navbar />
    <Home />
   
    <Preis />
    <Training />
    <FAQ />
   
    <Footer />
   </div>
  )
}

export default App
