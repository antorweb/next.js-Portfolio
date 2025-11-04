import React from 'react'
import CommonHead from '../components/common/CommonHead'
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FaFigma } from 'react-icons/fa6';
import Link from 'next/link';



const Contact = () => {
  return (
    <>
    
    
    <section id='contact' className='py-24'>
        <div className="container">
          
          <div className='flex justify-center'>
            <div className='w-[576px]'> <CommonHead comH2={'Get in touch'} comP={"What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."} /></div> <div> </div>
            </div>


            <div className='mt-24 text-center'>

              <div className='flex justify-center items-center gap-10'><LuMail className='text-[36px]' /><h2 className='text-[36px] font-semibold font-main text-main'> reachsagarshah@gmail.com</h2></div>
              <div className='flex justify-center items-center gap-10 mt-9 mb-25'><LuPhone className='text-[36px]' /><h2 className='text-[36px] font-semibold font-main text-main'> +91 8980500565</h2></div>


              <h4>You may also find me on these platforms!</h4>


     <div className="flex justify-center items-center gap-5 mt-2">
                <Link href={"/"} className="text-[24px]">
                  <FiGithub />
                </Link>
                <Link href={"/"} className="text-[24px]">
                  <FiTwitter />
                </Link>
                <Link href={"/"} className="text-[24px]">
                  <FaFigma />
                </Link>
              </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Contact