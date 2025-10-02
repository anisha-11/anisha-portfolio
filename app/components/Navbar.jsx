import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 ${isScroll ? "bg-[#0D0D0D] bg-opacity-50 backdrop-blur-lg shadow-sm" : "bg-[#0D0D0D]"}`}>
        <a href="#top">
          <Image src={assets.logo_white} alt="" className='w-20 sm:w-24 md:w-28 cursor-pointer mr-6 sm:mr-10 md:mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-2 ${isScroll ? "text-white" : "bg-[#0D0D0D] text-white shadow-sm bg-opacity-50"}`}>
          <li className='hover:text-[#22D3EE]'><a href="#top">Home</a></li>
          <li className='hover:text-[#22D3EE]'><a href="#about">About</a></li>
          {/* <li className='hover:text-[#22D3EE]'><a href="#services">Services</a></li> */}
          <li className='hover:text-[#22D3EE]'><a href="#work">Projects</a></li>
          {/* <li className='hover:text-[#22D3EE]'><a href="#contact">Contact</a></li> */}
        </ul>

        <div className='flex items-center gap-4'>
          {/* <button className='text-white hover:text-[#22D3EE]'>Dark</button> */}

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#06B6D4] hover:to-[#8B5CF6] text-white shadow-md rounded-full ml-4'>Contact</a>

          <button className='block md:hidden ml-3 text-white' onClick={openMenu}>Menu</button>
        </div>
        
        {/* mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-[#121212] text-white transition duration-500 tranform translate-x-[16rem]'>
          <div className='absolute right-6 top-6 cursor-pointer hover:text-[#22D3EE]' onClick={closeMenu}>Close</div>
          <li><a onClick={closeMenu} href="#top" className='hover:text-[#22D3EE]'>Home</a></li>
          <li><a onClick={closeMenu} href="#about" className='hover:text-[#22D3EE]'>About</a></li>
          <li><a onClick={closeMenu} href="#services" className='hover:text-[#22D3EE]'>Services</a></li>
          <li><a onClick={closeMenu} href="#work" className='hover:text-[#22D3EE]'>Projects</a></li>
          <li><a onClick={closeMenu} href="#contact" className='hover:text-[#22D3EE]'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
