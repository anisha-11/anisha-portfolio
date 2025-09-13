import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { use, useEffect, useRef, useState } from 'react'

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
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-amber-100 shadow-sm bg-opacity-50"}`}>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>Dark</button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact</a>

          <button className='block md:hidden ml-3' onClick={openMenu}>Menu</button>
        </div>
        
        {/* mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-200 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>Close</div>
          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About me</a></li>
          <li><a onClick={closeMenu} href="#services">Services</a></li>
          <li><a onClick={closeMenu} href="#work">My Work</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
