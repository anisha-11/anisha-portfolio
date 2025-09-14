import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>Image</div>
        <div className='flex-1'>Image2
        <p>Adding a para to say i am experienced salesforce dev with blah blah and blah</p>

        {/* <ul>
          asset.js 56
        </ul> */}

        <h4>Tools I use</h4>

        {/* <ul>
          asset.js 1h
        </ul> */}
        </div>
      </div>
    </div>
  )
}

export default About
