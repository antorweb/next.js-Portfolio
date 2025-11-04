import React from 'react'
import CommonHead from '../components/common/CommonHead'
import WorkCommon from '../components/common/WorkCommon'


const Work = () => {
  return (
    <>
    
    
    <section id='work' className='py-[96px]'>
        <div className="container">
             <CommonHead comH2={'Work'} comP={'Here is a quick summary of my most recent experiences:'} />
            <div>

                <WorkCommon />

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Work