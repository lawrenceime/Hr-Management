import React from 'react'
import Link from 'next/link'

const Content = () => {
  return (
    <div className='flex flex-col justify-center mt-[100px] ml-[200px] '>
        <p className='font-bold  text-[24px]  '>NEXT GEN HR MANAGEMENT</p>
        <div className='flex items-center bg-[#FFC0CB] w-[80%] h-[200px] opacity-20 mt-[16px]'>
           <Link href='#' className='bg-black text-white text-center w-[200px] h-[40px] rounded-[8px] ml-[40px] '>Employee login</Link>
        </div>
    </div>
  )
}

export default Content