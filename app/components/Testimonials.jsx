import React from 'react'
import CommonHead from '../components/common/CommonHead'
import TestCommon from '../components/common/TestCommon'

const Testimonials = () => {
  return (
    <>
    
    <section id='Testimonials' className='bg-[#F9FAFB] py-[96px]'>
        <div className="container">
            <CommonHead comH2={'Testimonials'} comP={'Nice things people have said about me:'} />
            <div className='flex items-center mt-24 gap-[48px] justify-center'>

         <TestCommon />
         <TestCommon />
         <TestCommon />
            </div>
        </div>
    </section>
    
    

    
    
    
    
    </>
  )
}

export default Testimonials