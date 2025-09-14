import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
      <Image src={assets.profile_picture} alt="" className=' rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 text-amber-300'>Hi! I'm Anisha Hirani</h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] text-amber-300'>Software Engineer</h1>
      <p className='max-w-2xl mx-auto text-amber-300'>I am based in London and currently working as a Salesforce Developer 
      with almost 2 years of experience working for Revolent Group whilst on placement at Yoox Net-a-Porter Group.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact
        {/* <Image src={assets.arrow} alt="" className='w-4'/> */}</a>
        <a href="add the file for cv - input later" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>CV 
        {/* <Image src={assets.download-icon} alt="" className='w-4'/> */}</a>
      </div>
    </div>
  )
}

export default Header
