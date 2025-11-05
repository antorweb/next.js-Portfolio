import React from 'react'
import CommonHead from '../components/common/CommonHead'
import ExperienceCommon from '../components/common/ExperienceCommon'

const Experience = () => {
  return (
    <>
    
    
    

    <section className='py-[96px] bg-[#F9FAFB] dark:bg-main '>
        <div className="container">
            <CommonHead comH2={'Experience'} comP={'Here is a quick summary of my most recent experiences:'} />
            <div className='mt-12 flex justify-center items-center flex-col gap-12'>

                <ExperienceCommon />
                <ExperienceCommon />
                <ExperienceCommon />

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Experience

