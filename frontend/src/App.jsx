import React from 'react'
import Home from './home/Home.jsx'
import './index.css'
import { Navigate, Route, Routes } from "react-router-dom"
import Explores from './explore/Explores.jsx'
import Signup from './components/Signup.jsx'
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider.jsx'
function App() {
  const [authUser, setAuthUser] =useAuth()
  console.log(authUser)
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/explore" element={authUser?<Explores/>:<Navigate to="/signup"></Navigate>}></Route>      
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     <Toaster/>
     </div>
    </>
 
  )
}

export default App
