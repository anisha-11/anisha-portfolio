import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-full  text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 bg-[#121212]'>
      <div>
      <Image src={assets.profile_picture} alt="" className=' rounded-full w-32 ring-2 ring-[#06B6D4]' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 text-[#F5F5F5]'>Hi! I'm <span className='text-[8B5CF6]'>Anisha Hirani</span></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] text-white'>Software Engineer</h1>
      <p className='max-w-2xl mx-auto text-[#D4D4D4]'>I am based in London and currently working as a Salesforce Developer 
      with almost 2 years of experience working for Revolent Group whilst on placement at Yoox Net-a-Porter Group.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full text-white font-medium shadow-md flex items-center gap-2'>Contact
        {/* <Image src={assets.arrow} alt="" className='w-4'/> */}</a>
        <a href="/cv.pdf" download className='px-10 py-3 border border-[#22D3EE] text-white hover:bg-[#0891B2] hover:text-white transition rounded-full flex items-center gap-2'>CV 
        {/* <Image src={assets.download-icon} alt="" className='w-4'/> */}</a>
      </div>
    </div>
  )
}

export default Header
