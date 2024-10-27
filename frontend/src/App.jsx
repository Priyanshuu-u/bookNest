import React from 'react'
import Home from './home/Home.jsx'
import './index.css'
import { Route, Routes } from "react-router-dom"
import Explores from './explore/Explores.jsx'
import Signup from './components/Signup.jsx'
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/explore" element={<Explores/>}></Route>      
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     </div>
    </>
 
  )
}

export default App
