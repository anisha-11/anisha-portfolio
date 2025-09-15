import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg text-[#22D3EE]'>Introduction</h4>
      <h2 className='text-center text-5xl font-bold text-[#8B5CF6]'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
        <Image src={assets.profile_picture} alt="" className='w-full rounded-3xl border-2 border-[#22D3EE]/30 shadow-lg shadow-[#8B5CF6]/20'/></div>
        <div className='flex-1'>
        <p className='mb-10 max-w-2xl'>Adding a para to say i am experienced salesforce dev with blah blah and blah</p>

        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
          {infoList.map(({icon, iconDark, title, description}, index)=>(
            <li className='border border-[22D3EE]/40 rounded-xl p-6 cursor-pointer hover:scale-105 transition duration-300 shadow-md shadow-black/40' key={index}>
              <Image src={icon} alt={title} className='w-7 mt-3'/>
              <h3 className='my-4 font-semibold text-[#8B5CF6]'>{title}</h3>
              <p className='text-sm'>{description}</p>
            </li>
          ))}
        </ul>

        <h4 className='my-6 text-lg text-[#22D3EE] font-semibold'>Tools used</h4>

        <ul className='flex items-center gap-3 sm:gap-5'>
          {toolsData.map((tool, index)=>(
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-[#8B5CF6] rounded-lg cursor-pointer hover:scale-110 transition duration-300 shadow-md shadow-black/40' key={index}>
              <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About
