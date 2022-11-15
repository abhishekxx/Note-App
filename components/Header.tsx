import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-600 h-[4rem] w-full '>
        <div className='flex justify-between'>
            <h1 className='p-3 text-2xl font-bold text-white cursor-pointer'>&#9782; Notes</h1>
            <span className='p-3 text-2xl font-bold text-white '>1</span>
        </div>
    </div>
  )
}

export default Header