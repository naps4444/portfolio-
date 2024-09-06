import React from 'react'
import about from './../assets/naps2.jpg'
import SkillsCarousel from '../SmallerComponents/SkillCarousel'


const Section2 = () => {
  return (
    <>
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto container py-20'>
        <div>
            <img src={about} alt="img" className='w-[500px]' />
        </div>

        <div className='flex flex-col justify-center'>
        <div className='flex flex-col gap-3 my-auto h-[300px] text-[#282938]'>
            <p className='font-bold text-sm'>About</p>
            <h1 className='text-[45px] font-bold'>About Me</h1>
            <p>Hello! I'm a passionate Full Stack Developer with extensive experience in building modern, scalable web applications. My expertise spans a variety of technologies, enabling me to create seamless and dynamic user experiences from the ground up.</p>
        </div>

      

        </div>
    </div>


    <div>
      <SkillsCarousel/>
    </div>


    </div>
        
    </>
  )
}

export default Section2