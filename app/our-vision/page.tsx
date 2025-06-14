import React from 'react'
import NavBar from '@/components/navbar'
import HeroTemplate from '@/components/herotemplate';


const Page = () => {
  return (
    <div className='flex flex-col'>
        <NavBar />
        <HeroTemplate image='https://images.unsplash.com/photo-1513346940221-6f673d962e97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Our Vision' subtitle=''/>
    </div>
  )
}

export default Page