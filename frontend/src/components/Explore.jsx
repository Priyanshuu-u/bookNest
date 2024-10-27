import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"
function Explore() {
  return (
    <>
    <div  className="max-w-screen2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white">
      <div className=' items-center justify-center text-center'>
        <h1 className='text-2xl mt-16 md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-7'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magnam esse praesentium iure officia laborum odit sunt optio accusamus reiciendis, error eaque architecto molestias asperiores, dignissimos exercitationem, magni voluptatem. Unde?
        </p>
      <Link to="/">
      <button className='btn bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5'>Back</button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Explore
