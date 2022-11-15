import Link from 'next/link';
import React from 'react'

interface Package {
  note: any[];
}


const ListItems = ({note}:Package) => {    
  return (
    <div>
        <div className=''>
            {note.map((el:any) => (
              <Link href="/notelist" key={el.id}>
             <h1 key={el} className='flex justify-start p-1 my-2 text-black'>{el.body}</h1>
             </Link>
            ))}
        </div>
    </div>
  )
}

export default ListItems