import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo_white} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto font-medium'>
          anisha.hirani11@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-[#22D3EE]/30 pt-6 mx-[10%] mt-12 py-6'>
        <p>Copyright 2025 Anisha Hirani. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/anisha-11" className='hover:text-[#22D3EE] transition-colors duration-300'>Github</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/anisha-hirani-251b67203/" className='hover:text-[#22D3EE] transition-colors duration-300'>LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
