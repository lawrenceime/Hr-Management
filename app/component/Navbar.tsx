import React from 'react'
import Link from 'next/link'
import { GiLaptop } from "react-icons/gi";




const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between  bg-white fixed top-0 z-50 w-full border-[2px] h-[64px] px-[100px] '>

      <GiLaptop href='/' className='w-[24px] h-[24px]'/>
     <div className='flex gap-[30px]'>
        <Link href="#" className='hover:text-blue-500 text-[16px]' >Contact Us</Link>
        <Link href="#" className='hover:text-blue-500 text-[16px]' >About Us</Link>
        <Link href="#" className='hover:text-blue-500 text-[16px]'>Help</Link>
        <Link href="#" className='hover:text-blue-500 text-[16px]' >Rate Us</Link>

     </div>
    </div>
  )
}

export default Navbar