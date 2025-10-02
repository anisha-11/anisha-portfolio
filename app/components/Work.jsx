import { assets, workCards } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-bold text-[#8B5CF6]'>Projects</h2> 
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Explore my projects showcasing my expertise in development.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
        {workCards.map((project, index)=>(
          <div key={index} 
          className='text-center md:text-left aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-lg hover:shadow-[#8B5CF6]/40 transition-all duration-300' 
          style={{backgroundImage: `url(${project.bgImage.src})`}}>
            <div className='bg-black w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between'>
              <div>
                <h2 className='font-semibold text-xl text-[#8B5CF6]'>{project.title}</h2>
                <p className='text-sm mt-1'>{project.description}</p>
              </div>
              {/* <div className='mt-3 border rounded-full border-[#22D3EE] w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition'>
                <Image src={assets.logo} alt='send-icon' className='w-5'/>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/anisha-11?tab=repositories" target='_blank' rel='noopener noreferrer'
      className='w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auto my-20 font-medium bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] transition-colors duration-300'>
        View More {/*<Image src={assets.arrow-bold} alt='Right arrow' className='w-4'/> */}
      </a>
    </div>
  )
}

export default Work
