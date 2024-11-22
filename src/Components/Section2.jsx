import React from 'react'
import about from './../assets/naps2.jpg'
import SkillsCarousel from '../SmallerComponents/SkillCarousel'

const Section2 = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto container py-20'>
        <div>
          <img src={about} alt="Uchemadu nmerengwa" className='w-[500px]' />
        </div>

        <div className='flex flex-col justify-center'>
          <div className='flex flex-col gap-3 my-auto h-[300px] text-[#282938]'>
            <p className='font-bold text-sm'>About</p>
            <h1 className='text-[45px] font-bold'>About Me</h1>
            <p className='lg:text-[22px]'>Hello! I'm Uchemadu Nmerengwa, a passionate Full Stack Developer with three years of experience in web development. I specialize in building scalable applications using React, Next.js, and various backend technologies. My expertise includes responsive design, efficient debugging, and leveraging cloud technologies for seamless deployment.</p>
          </div>
        </div>
      </div>

      <div>
        <SkillsCarousel />
      </div>
    </>
  )
}

export default Section2
