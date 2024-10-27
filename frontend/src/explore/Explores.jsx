import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Explore from '../components/Explore'

function Explores() {
  return (
   <>
   
  <Navbar />
  <div className='min-h-screen  dark:bg-slate-900 dark:text-white'>
  <Explore />
  </div>
  <Footer />


   </>
  )
}

export default Explores
