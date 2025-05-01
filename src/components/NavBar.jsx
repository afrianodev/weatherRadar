import React from 'react'

export default function NavBar() {
  return (
    <div className='bg-neutral-200 flex rounded-b-lg shadow-md p-2 gap-2 w-full max-w-[600px]'>
        <div className='p-1 bg-neutral-200 shadow-md rounded-lg flex-1 text-center transform hover:translate-x-[1px] hover:translate-y-[1px] transition-transform'>Home</div>
        <div className='p-1 bg-neutral-200 shadow-md rounded-lg flex-1 text-center'>Tourist Mode</div>
        <div className='p-1 bg-neutral-200 shadow-md rounded-lg flex-1 text-center'>Another feature</div>
    </div>
  )
}
