import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='relative w-full text-center min-h-screen flex items-center justify-center gap-4 px-[6%] py-16 '>
      <div className='absolute top-0 left-1/4 w-56 h-56 bg-[#8B5CF6]/60 rounded-full filter blur-3xl -z-10'
      style={{ animation: 'floatingSlow 6s ease-in-out infinite' }}>
    </div>
    <div className='absolute bottom-0 right-1/4 w-72 h-72 bg-[#22D3EE]/60 rounded-full filter blur-3xl -z-10'
      style={{ animation: 'floatingReverse 8s ease-in-out infinite' }}>
    </div>
    {/* Left: Profile Image */}
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mx-auto">
    <div className="flex-shrink-0 w-40 sm:w-56 md:w-72 lg:w-80 mx-auto md:mx-0">
        <Image src={assets.profile_picture} alt="" width={320} height={320} className="rounded-2xl border-2 border-[#22D3EE]/30 shadow-lg shadow-[#8B5CF6]/20"/>
    </div>
      {/* <div>
      <Image src={assets.profile_picture} alt="" className=' rounded-full w-32 ring-2 ring-[#06B6D4]' />
      </div> */}
      <div className="flex-1 flex flex-col text-center md:text-left gap-4 max-w-2xl">
      {/* <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I'm Anisha Hirani</h3> */}
      <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#F5F5F5] leading-snug'>Anisha Hirani</h1>
      <h2 className='text-lg sm:text-2xl font-medium text-[#8B5CF6]'>Software Engineer</h2>
      <p className='max-w-2xl mx-auto md:mx-0 text-base sm:text-lg leading-relaxed text-[#D4D4D4]'>Passionate about building modern digital solutions. With experience in Salesforce and Web Development, I create scalable features that deliver real impact and business value.</p>

      <div className='flex flex-row justify-center md:justify-start gap-4 mt-6'>
        <a href="#contact" className='px-8 py-2.5 sm:px-10 sm:py-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#06B6D4] hover:to-[#8B5CF6] rounded-full text-white font-medium shadow-md flex items-center gap-2 transition-all duration-300'>Contact
        {/* <Image src={assets.arrow} alt="" className='w-4'/> */}</a>
        <a href="/cv.pdf" download className='px-8 py-2.5 sm:px-10 sm:py-3 border border-[#22D3EE] text-white hover:bg-[#0891B2] hover:text-white transition rounded-full flex items-center gap-2'>CV 
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
