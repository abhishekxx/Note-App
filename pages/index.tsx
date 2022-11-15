import type { NextPage } from 'next'
import Head from 'next/head'
// import Header from '../components/Header'
// import notes from '../assets/data'
// import ListItems from '../components/ListItems'
import NoteList from './notelist'


const Home: NextPage = () => {
  return (
    <div className="App">
      <div className='container flex justify-center p-10'>
        <NoteList/>
      </div>
    </div>
  )
}

export default Home
