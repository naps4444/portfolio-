import React from 'react'
import giti from './../assets/giti.svg'
import p1 from './../assets/jobme.png'
import p2 from './../assets/tasky.png'
import p3 from './../assets/cofe.png'
import p4 from './../assets/beta.png'
import arrow from './../assets/arrow.svg'
import Pcarousel from '../SmallerComponents/Pcarousel'

const Section3 = () => {
  return (
    <>
      <div className='container w-11/12 mx-auto py-10'>
        <div className='flex justify-between items-center'>
          <div className='text-[#282938] flex flex-col gap-5 lg:gap-0'>
            <p className='text-xs font-bold'>Recent Projects</p>
            <p className='font-bold text-[17px] lg:text-[35px]'>My Portfolio</p>
          </div>
          <div className='bg-[#7E69D3] w-[180px] rounded gap-2 lg:py-3 py-1 px-1 lg:px-3 flex justify-center items-center'>
            <img src={giti} alt="git icon" />
            <a href='https://github.com/naps4444' className='text-white'>Visit My GitHub</a>
          </div>
        </div>

        <div className='lg:hidden py-14'>
          <Pcarousel />
        </div>

        <div className='hidden lg:grid lg:grid-cols-3 justify-between items-center gap-6 py-16'>
          <div className='shadow-md rounded'>
            <img src={p1} alt="Job Me" />
            <div className='p-5 flex flex-col gap-4'>
              <h1 className='text-lg font-semibold'>Job Me</h1>
              <p>A job application platform built with Next.js, featuring user authentication and API integration for seamless job application management.</p>
              <a href='https://job-me-next-js.vercel.app/' className='flex w-[125px] items-center gap-2 hover:border-b-2 hover:border-[#5E3BEE]'>
                <p>View website</p>
                <img src={arrow} alt="arrow icon" />
              </a>
            </div>
          </div>

          <div className='shadow-md rounded'>
            <img src={p2} alt="TaskDuty" />
            <div className='p-5 flex flex-col gap-4'>
              <h1 className='text-lg font-semibold'>TaskDuty</h1>
              <p>A task management platform built with Next.js, integrating API-based CRUD operations and user authentication for task tracking.</p>
              <a href='https://taskduty-pi.vercel.app/' className='flex w-[125px] items-center gap-2 hover:border-b-2 hover:border-[#5E3BEE]'>
                <p>View website</p>
                <img src={arrow} alt="arrow icon" />
              </a>
            </div>
          </div>

          <div className='shadow-md rounded'>
            <img src={p3} alt="CofeShop" />
            <div className='p-5 flex flex-col gap-4'>
              <h1 className='text-lg font-semibold'>CofeShop</h1>
              <p>An e-commerce platform for coffee products, built with Next.js and integrated with user authentication and API-based CRUD operations.</p>
              <a href='https://cofeshop-alpha.vercel.app/' className='flex w-[125px] items-center gap-2 hover:border-b-2 hover:border-[#5E3BEE]'>
                <p>View website</p>
                <img src={arrow} alt="arrow icon" />
              </a>
            </div>
          </div>

          <div className='shadow-md rounded'>
            <img src={p4} alt="BetaHouse" />
            <div className='p-5 flex flex-col gap-4'>
              <h1 className='text-lg font-semibold'>BetaHouse</h1>
              <p>A real estate platform that allows users to browse and manage properties, built with Next.js and integrated with API-based operations.</p>
              <a href='https://real-estate-b6sm.onrender.com/' className='flex w-[125px] items-center gap-2 hover:border-b-2 hover:border-[#5E3BEE]'>
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
