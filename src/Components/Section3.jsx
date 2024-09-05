import React from 'react'
import giti from './../assets/giti.svg'
import p1 from './../assets/p1.svg'
import p2 from './../assets/p2.svg'
import p3 from './../assets/p3.svg'
import arrow from './../assets/arrow.svg'
import Pcarousel from '../SmallerComponents/Pcarousel'

const Section3 = () => {
  return (
    <>
    <div className='container w-11/12 mx-auto py-10'>
        <div className='flex justify-between items-center'>
            <div className='text-[#282938] flex flex-col gap-5 lg:gap-0'>
                <p className='text-xs font-bold'>Recent Projects</p>
                <p className='font-bold text-[20px] lg:text-[35px]'>My Portfolio</p>
            </div>
            <div className='bg-[#7E69D3] w-[180px] rounded gap-2 py-3 px-3 flex justify-center items-center'>
                <img src={giti} alt="git icon" />
                <p className='text-white'>Visit My GitHub</p>
            </div>
        </div>



        <div className='lg:hidden py-14'>
            <Pcarousel/>
        </div>


        <div className='hidden lg:flex justify-between items-center gap-6 py-16'>
            <div className='shadow-md rounded'>
                <img src={p1} alt="img" />

                <div className='p-5 flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Ahuse</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <a href='/LandingPage' className='flex w-[125px] items-center gap-2  hover:border-b-2 hover:border-[#5E3BEE]'>
                    <p>View website</p>
                    <img src={arrow} alt="arrow icon" />
                </a>
                </div>
            </div>


            <div className='shadow-md rounded'>
            <img src={p2} alt="img" />

            <div className='p-5 flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Ahuse</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <a href='/LandingPage' className='flex w-[125px] items-center gap-2  hover:border-b-2 hover:border-[#5E3BEE]'>
                    <p>View website</p>
                    <img src={arrow} alt="arrow icon" />
                </a>
                </div>
            </div>



            <div className='shadow-md rounded'>
            <img src={p3} alt="img" />

            <div className='p-5 flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Ahuse</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <a href='/LandingPage' className='flex w-[125px] items-center gap-2  hover:border-b-2 hover:border-[#5E3BEE]'>
                    <p>View website</p>
                    <img src={arrow} alt="arrow icon" />
                </a>
                </div>

            </div>
        </div>


    </div>
        
    </>
  )
}

export default Section3