import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='relative w-full text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
      <div className='absolute top-0 left-1/4 w-56 h-56 bg-[#8B5CF6]/60 rounded-full filter blur-3xl -z-10'
      style={{ animation: 'floatingSlow 6s ease-in-out infinite' }}>
    </div>
    <div className='absolute bottom-0 right-1/4 w-72 h-72 bg-[#22D3EE]/60 rounded-full filter blur-3xl -z-10'
      style={{ animation: 'floatingReverse 8s ease-in-out infinite' }}>
    </div>
    {/* Left: Profile Image */}
    <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
    <div className="flex-shrink-0 w-64 md:w-96">
        <Image src={assets.profile_picture} alt="" width={320} height={320} className="rounded-2xl border-2 border-[#22D3EE]/30 shadow-lg shadow-[#8B5CF6]/20"/>
    </div>
      {/* <div>
      <Image src={assets.profile_picture} alt="" className=' rounded-full w-32 ring-2 ring-[#06B6D4]' />
      </div> */}
      <div className="flex-1 flex flex-col items-start text-left gap-4 mt-8 md:mt-0">
      {/* <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I'm Anisha Hirani</h3> */}
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-bold'>Hi! I'm Anisha Hirani</h1>
      <p className='max-w-2xl text-[#D4D4D4]'> A Software Engineer based in London and currently working in Salesforce with the drive and motivation
      to improve technology.</p>
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full text-white font-medium shadow-md flex items-center gap-2'>Contact
        {/* <Image src={assets.arrow} alt="" className='w-4'/> */}</a>
        <a href="/cv.pdf" download className='px-10 py-3 border border-[#22D3EE] text-white hover:bg-[#0891B2] hover:text-white transition rounded-full flex items-center gap-2'>CV 
        {/* <Image src={assets.download-icon} alt="" className='w-4'/> */}</a>
      </div>
      </div>
      </div>

      <style jsx>{`
        @keyframes floatingSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatingReverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
    `}</style>
    </div>
  )
}

export default Header
