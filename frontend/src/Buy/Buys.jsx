import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buy from '../components/Buy'

function Buys({authUser}) {
    return (
     <>
     
    <Navbar />
    <div className='min-h-screen  dark:bg-slate-900 dark:text-white mt-20'>
    <Buy authUser={authUser} />
    </div>
    <Footer />
  
  
     </>
    )
  }
  
  export default Buys
  