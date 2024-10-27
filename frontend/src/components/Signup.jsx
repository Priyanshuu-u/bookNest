import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // Create a ref to control the dialog
  const loginModalRef = useRef(null);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-lg">Sign Up</h3>
              
              <div className='mt-4 space-y-2'>
                <span>Name</span> <br />
                <input 
                  type="text"
                  placeholder='Enter your Full Name'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })} 
                />
                 {errors.name && <p className="text-red-500">Full Name is required</p>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Email</span> <br />
                <input 
                  type="email"
                  placeholder='Enter your Email'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })} 
                />
                 {errors.email && <p className="text-red-500">Email is required</p>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Password</span> <br />
                <input 
                  type="password"
                  placeholder='Enter your Password'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })} 
                />
                 {errors.password && <p className="text-red-500">Password is required</p>}
              </div>

              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mr-4'>Sign up</button>

                <p>Already have an account? <button  className='underline text-blue-500 cursor-pointer ' onClick={()=>document.getElementById("my_modal_3").showModal()}>Log in!</button>
        <Login/></p>
      </div>
      </form>
    </div>
  </div>
        </div></>
  )
}

export default Signup;