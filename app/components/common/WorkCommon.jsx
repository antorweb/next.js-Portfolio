import Image from 'next/image'
import React from 'react'
import workImg from '../../../public/images/WorkPicture.png'

const WorkCommon = () => {
  return (
    <div className='w-[1152px] shadow rounded-b-2xl'>
        {/* -------- left-content */}
        <div className='w-[576px] h-[480px] bg-[#F9FAFB]'>
            <Image className='p-[48px]' src={workImg} alt='work-img' />
        </div>

        {/* ------------ right-content */}
        <h3 className='text-[20px] font-semibold font-main text-main'>Fiskil</h3>
        <div className='w-[480px] my-[24px]'><p className='text-[16px] font-normal font-main text-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p></div>
    </div>
  )
}

export default WorkCommon