import React from 'react'
import Header from './Header'

const Page1 = () => {
  return (
    <div className='screen1 md:h-screen h-auto w-full pb-10 md:pb-0  relative'>
      <Header />
      <div className='flex flex-col gap-12 justify-center items-center text-center md:pt-36 pt-24 text-white'>
        <div className='md:text-4xl text-2xl tracking-wide'>Welcome to my site!</div>
        <div className='md:text-8xl text-4xl tracking-wide'>Hi, I am Aman Tiwari.</div>
        <div className='text-xl tracking-wide border-2 border-white p-3'>More About me </div>
      </div>
    </div>
  )
}

export default Page1