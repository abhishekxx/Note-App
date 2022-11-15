import Link from 'next/link'
import React from 'react'

const AddButton = () => {
    return (
        <Link href="/note/new/" >
        <div className='fixed bg-orange-400 rounded-full'>
          <img src='add.svg' className='w-12 h-12 p-2 cursor-pointer'/>
        </div>
        </Link>
    )
}

export default AddButton
