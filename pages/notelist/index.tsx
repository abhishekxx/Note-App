import React from 'react'
import notes from '../../assets/data'
import AddButton from '../../components/AddButton'
import Header from '../../components/Header'
import ListItems from '../../components/ListItems'

const NoteList = () => {
  return (
    <>
    <div className='bg-gray-400 h-[80vh]  rounded-2xl'>
      <Header/>
        <div className='p-4'>
              <ListItems note={notes}/>
        </div>
      <div className='flex justify-end p-2 md:p-4 md:my-64'>
        <AddButton/>
      </div>
    </div>
    </>
  )
}

export default NoteList

        // {packages?.map((el: any) => (
