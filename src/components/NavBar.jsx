import React, { useState, forwardRef } from 'react'
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const [toggle, setToggle] = useState(false)
    
  return (
    <>
    <div className='absolute left-[4px] top-[4px] flex justify-center items-center select-none'>
        <img src="claimate-logo.webp" alt="claimate logo, is a blue circle with a white cloud inside."
        className='w-10' />
        <h1 className='text-2xl font-semibold text-neutral-600'>cl<span className='text-[#005ef1]'>ai</span>mate</h1>
    </div>
    <div className='absolute right-[8px] top-[4px] cursor-pointer flex gap-2 justify-center items-center select-none'
    onClick={() => setToggle(prev => !prev)}>
        <p className='text-sm text-neutral-600 font-medium'>{toggle ? 'Dark Mode' : 'Light Mode'}</p>
        {toggle ? <LiaToggleOnSolid className='text-neutral-700 text-3xl' /> : <LiaToggleOffSolid className='text-neutral-700 text-3xl' />}
    </div>
    <div className='bg-neutral-100/50 backdrop-blur-sm flex rounded-b-lg shadow-md p-2 gap-2 w-full max-w-[600px]'>
        <NavLink to='/' className='p-1 bg-neutral-100/50 shadow-md rounded-lg flex-1 text-center font-semibold text-neutral-600 backdrop-blur-lg select-none cursor-pointer'>Home</NavLink>
        <NavLink to='/explore' className='p-1 bg-neutral-100/50 shadow-md rounded-lg flex-1 text-center font-semibold text-neutral-600 backdrop-blur-lg select-none cursor-pointer'>Explore</NavLink>
        <NavLink to='/planner' className='p-1 bg-neutral-100/50 shadow-md rounded-lg flex-1 text-center font-semibold text-neutral-600 backdrop-blur-lg select-none cursor-pointer'>Planner</NavLink>
    </div>
    </>
  )
}
