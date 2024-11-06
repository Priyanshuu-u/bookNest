import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('Users')
            toast.success('Logged out successfully!')
            setTimeout(()=>{
                window.location.reload()
            },2000)
          
        } catch (error) {
            toast.error('Couldn\'t log out due to error: '+ error.message);
            setTimeout(()=>{},3000)
        }
    }
  return (
    <div className='flex'>
       <a className="btn px-3 py-3 bg-black text-white bg-pink-500 cursor-pointer mr-5 rounded-md " href="/books/profile" >Profile</a>
      <button className='px-3 py-2 bg-purple-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
