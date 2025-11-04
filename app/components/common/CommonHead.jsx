import React from 'react'

const CommonHead = ({comH2,comP}) => {
  return (
    <div className='text-center '>
      <div className='flex justify-center'>

        <div className='px-[20px] py-[4px] flex justify-center mb-8 rounded-2xl bg-[#E5E7EB]'><h1 className='text-[16px] font-medium font-main text-primary'>{comH2}</h1></div>
      </div>
      <div className=''>
        <p className='text-10 font-normal font-main text-primary'>{comP}</p>

      </div>






    </div>
  )
}

export default CommonHead