import React from 'react'

function Main() {
  return (
    <div className='w-[90%] h-[85%] rounded-lg shadow-md flex overflow-hidden'>
        <div className='flex-1 flex flex-col gap-4 p-4 bg-neutral-100/50 backdrop-blur-sm'>
            <div className='flex-1 rounded-lg shadow-md bg-[url(https://static.scientificamerican.com/sciam/cache/file/6B2730C8-B0D0-485F-A0618F3954CF58D8_source.jpg?w=1200)] bg-cover'>
            </div>
            <div className='bg-neutral-200 h-1/4 rounded-lg'>forecast of 7 days</div>
        </div>
        {/* second column */}
        <div className='w-1/3 bg-neutral-200/50 p-4 flex flex-col backdrop-blur-lg'>
            <div className='h-3/5'>
                <div className='rounded-lg'>
                    <p>Here is the text from the AI</p>
                </div>
            </div>
            <div className='h-2/5'>
                <div>
                    Here is the text of what is showing
                </div>
                <div className='bg-neutral-300 rounded-lg p-1 flex gap-1 justify-between'>
                    <div className='bg-neutral-200 rounded-lg flex-1 text-center'>Outfit</div>
                    <div className='bg-neutral-200 rounded-lg flex-1 text-center'>UV</div>
                    <div className='bg-neutral-100 rounded-lg flex-1 text-center'>Another</div>
                </div>
                <div>
                    text from the ai
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main