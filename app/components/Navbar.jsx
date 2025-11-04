'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdLightMode } from "react-icons/md";


const Navbar = () => {

  const myhtml = document.querySelector('html')

  const handelMode = ()=>{
    myhtml.classList.toggle('dark')
    console.log(myhtml)

  }



  return (
    <>
    
    
    
    <nav id='navbar'>
        <div className="container">

            <div className='flex justify-between items-center py-8'>


            {/* ----------------- images-section */}

          {/* <Image src={'/'} /> */}

          {/* ------------- nav-items section */}

          <div>
            <ul className='flex items-center gap-[24px]'>  
                <li><Link href={'/'} className='text-[16px] font-medium font-main text-main'   >About</Link></li>
                <li><Link href={'/'}  className='text-[16px] font-medium font-main text-main' >Work</Link></li>
                <li><Link href={'/'}  className='text-[16px] font-medium font-main text-main' >Testimonials</Link></li>
                <li><Link href={'/'} className='text-[16px] font-medium font-main text-main'  >Contact</Link></li>
            </ul>
          </div>


          {/* -------------- button segment */}


          <div className='flex items-center gap-8'>


          <button onClick={handelMode}><MdLightMode /></button>
          <button className='w-[136px] text-[16px] font-medium font-main text-[#F9FAFB] bg-main rounded-2xl py-[6px] dark:bg-red-500 '>Download CV</button>
          </div>

            </div>


        </div>
    </nav>
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar