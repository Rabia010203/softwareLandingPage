import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='grid mt-12 md:gap-x-10 equal-margin grid-cols-1 md:grid-cols-4'>
    <div>
      <h3 className='footer-header'>Dash</h3>
<p className='mt-2'>Dash is a leading software products company specializing in innovative solutions that drive business efficiency and digital transformation.</p>
    </div>
<div className=''>
    <h3 className='footer-header' id='other'>Other Pages</h3>
    <ul className='mt-2'>

        <li className='mt-1'><a href="">Marketing</a></li>
        <li className='mt-3'><a href="">Compaign</a></li>
<li className='mt-3'><a href="">Digital Agency</a></li>
        
    </ul>
    <div>

    </div>
</div>
<div>
    <h3 className='footer-header mt-12 md:mt-0'>Awesome Features</h3>
    <ul className='mt-2'>
        <li  className='pb-3 flex  items-center'><FaCheck className='me-2 text-sm text-amber-500'/>Data Security </li>
       <li className='pb-3 flex items-center'><FaCheck className='me-2 text-sm text-amber-500'/>Customizability</li> 
       <li className='pb-3 flex items-center'><FaCheck className='me-2 text-sm text-amber-500'/>Cross-Platform Compatibility</li> 

     </ul>
</div>
<div className=''>
   <h3 className='footer-header'>Contact Info</h3> 
   <ul className='mt-2'>
        <li  className='pb-3 flex items-center'><IoLocationOutline className='me-2 text-violet-500'/>UI-Lib ,India </li>
       <li className='pb-3 flex items-center my-auto'><MdOutlineEmail className='me-2 text-violet-500'/>pretty@yahoo.com</li> 
       <li className='pb-3 flex items-center'><FiPhoneCall className='me-2 text-violet-500'/>+918274563920</li> 

     </ul>
     <ul className='flex flex-wrap gap-x-5'>
     <li>
     <a href='https://www.facebook.com/' className='btn-outline text-lg flex rounded-lg bg-white justify-center
    items-center btn-sm w-14 h-12 shadow-md'> 
     
<FaFacebookF className='text-blue-800'/>
    
    </a>
     </li>
    <li>
    <a href='https://x.com/?lang=en' className='btn-outline text-lg flex rounded-lg bg-white justify-center
    items-center btn-sm w-14 h-12 shadow-md'> 
     
<FaTwitter className='text-sky-500'/>
    
    </a>
    </li>
    <li>
    <a href='https://x.com/?lang=en' className='btn-outline text-lg flex rounded-lg bg-white justify-center
    items-center btn-sm w-14 h-12 shadow-md'> 
    
<FaGoogle className='text-orange-600'/>
    
    </a>
    </li>
    
     </ul>
    
    
</div>

    </div>
  )
}

export default Footer
