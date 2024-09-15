import React from 'react'

import { FaCheck } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className='bg-violet-500 equal-margin grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24' id='home'>
      <div className='mt-20  md:mt-24 max-w-6xl text-white'>
        <h1 className=' text-4xl   font-medium capitalize'>"Redefine What's Possible: Explore Dash"</h1>
        <h3 className='mt-4 text-xl'>Meet Dash - From Concept to Code:  We Bring Your Vision to Life.</h3>
     <ul className='mt-4 mb-6'>
        <li  className='pb-3 flex  items-center'><FaCheck className='me-2 '/> Innovative Solutions</li>
       <li className='pb-3 flex items-center'><FaCheck className='me-2 '/>User-Centric Design</li> 
       <li className='pb-3 flex items-center'><FaCheck className='me-2 '/>Scalability and Flexibility</li> 

     </ul>
     <button className='btn bg-transparent hover:bg-white curve-btn btn-md w-36   font-medium text-white uppercase'>sign in </button>   
      </div>
      <article className='mb-1'><img src="/Hero.svg" className='md:w-auto md:mt-20' alt="image" /></article>
      
    </section>
  )
}

export default Hero
