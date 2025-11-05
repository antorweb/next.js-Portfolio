import React from 'react'
import CommonHead from '../components/common/CommonHead'
import WorkCommon from '../components/common/WorkCommon'


const Work = () => {
  return (
    <>
    
    
    <section id='work' className='py-[96px] dark:bg-main'>
        <div className="container">
             <CommonHead comH2={'Work'} comP={'Here is a quick summary of my most recent experiences:'} />
            <div className='mt-[48px] flex flex-col justify-center items-center gap-[48px]'>

                <WorkCommon  />
                <WorkCommon flexDirection={'flex-row-reverse'} />
                <WorkCommon />

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Work