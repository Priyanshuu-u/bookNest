import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
function Blogs({authUser}) {
  return (
    <>
      <Navbar />
      <div className='min-h-screen  dark:bg-slate-900 dark:text-white mt-20'>
        <Blog authUser={authUser}/>
       
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
