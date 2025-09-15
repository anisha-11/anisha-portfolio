import { assets, serviceCards } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg text-[#22D3EE]'>What I Offer</h4>
      <h2 className='text-center text-5xl font-bold text-[#8B5CF6]'>My Services</h2> 
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Lorem Ipsum</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
        {serviceCards.map(({icon, title, description, link}, index)=>(
          <div key={index} className='border border-[#22D3EE]/40 bg-[#121212] rounded-2xl px-8 py-12 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition duration-300'>
            <Image src={icon} alt='' className='w-10 mb-4'/>
            <h3 className='text-lg font-semibold mb-3 text-[#8B5CF6]'>{title}</h3>
            <p className='text-sm leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 text-[#22D3EE] hover:text-[#8B5CF6] transition'>Read More {/*<Image src={assets.arrow} className='w-4'/>*/}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
