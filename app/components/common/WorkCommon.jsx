import Image from 'next/image'
import React from 'react'
import workImg from '../../../public/images/WorkPicture.png'

const WorkCommon = ({flexDirection}) => {
  return (
    <div className={`w-[1152px] flex items-center shadow rounded-b-2xl ${flexDirection}`}>
        {/* -------- left-content */}
        <div className='w-[576px] h-[480px] bg-[#F9FAFB]'>
            <Image className='p-[48px]' src={workImg} alt='work-img' />
        </div>

        {/* ------------ right-content */}
        <div className='w-[480px] p-[48px] '>
        <h3 className='text-[20px] font-semibold font-main dark:text-white text-main'>Fiskil</h3>

          <div className='w-[480px] my-[24px]'>

          
          <p className='text-[16px] font-normal dark:text-white font-main text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

          </div>

<div className='w-[480px] flex flex-wrap gap-[8px]'>


        <div className='max-w-none px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>React</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Next.js</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Typescript</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Nest.js</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>PostgreSQL</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Tailwindcss</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Figma</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Cypress</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Storybook</h1></div>
        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>Git</h1></div>

</div>
        
        
        
        </div>
    </div>
  )
}

export default WorkCommon