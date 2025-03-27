import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";



let currentYear = new Date().getFullYear()

function Footer() {
  return (
    <div className='px-6 py-4 bg-[#141236] text-white flex flex-col items-center justify-center'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex gap-8'>
          <a href='https://portfolio-afrianodev.vercel.app/' target='_blank' className='cursor-pointer select-none hover:scale-[102%]'>About Me</a>
          <a href='https://github.com/afrianodev/weatherRadar' target='_blank' className='cursor-pointer select-none hover:scale-[102%]'>Source Code</a>
        </div>
        <div className='flex gap-6'>
          <div className='flex gap-4 text-xl'>
            <a href="https://www.linkedin.com/in/afriano/" target='_blank'><FaLinkedin className='cursor-pointer select-none hover:scale-[107%]' /></a>
            <a href="https://github.com/afrianodev" target='_blank'><FaGithub className='cursor-pointer select-none hover:scale-[107%]' /></a>
            <a href="https://portfolio-afrianodev.vercel.app/#contact" target='_blank'><FaCircleUser className='cursor-pointer select-none hover:scale-[107%]' /></a>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <a href="https://portfolio-afrianodev.vercel.app/" target='_blank'><img src="https://i.imgur.com/41k3s76.png" alt="afriano logo" className='h-4 cursor-pointer select-none hover:scale-[105%]' /></a> 
        <div>© {currentYear}</div>
      </div>
    </div>
  )
}

export default Footer
