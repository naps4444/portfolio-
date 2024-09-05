import React from 'react'
import hero from './../assets/naps1.jpg'

const Hero = () => {
  return (
    <>
    <div className='bg-[#F5FCFF] py-20'>
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-11/12 container'>
        <div className='flex flex-col gap-5 my-auto px-4'>
            <p className='font-semibold'>Hey, I am Uche</p>

            <h1 className='text-[45px] font-bold'>I develop dynamic and User-Centered Web  Applications</h1>

            <p className='lg:w-10/12'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>

            <button className='py-3 w-[120px] bg-[#5E3BEE] hover:text-[#5E3BEE] hover:border rounded hover:border-[#5E3BEE] hover:bg-white text-white'>Get In Touch</button>
            
        </div>

        <div>
            <img src={hero} className='w-full' alt='img'/>

        </div>
    </div>
    </div>
    </>
  )
}

export default Hero