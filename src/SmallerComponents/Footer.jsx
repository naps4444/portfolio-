import React from 'react'
import logo from "./../assets/logo.svg";
import sc1 from './../assets/sc1.svg'
import sc2 from './../assets/sc2.svg'
import sc3 from './../assets/sc3.svg'
import sc4 from './../assets/sc4.svg'

const Footer = () => {
  return (
    <>
    <div className='w-11/12 mx-auto container'>
        <div className='flex flex-col lg:flex-row justify-between items-center py-14 border-[#2829388C] border-b-[1px]'>
            <div className='flex gap-2 items-center'>
               <img src={logo} alt="logo" className="text-xl font-bold" />
               <h1 className="font-bold text-2xl text-[#394149]">AgbaDev,</h1>
            </div>



            <div>
                <ul className='flex flex-wrap justify-center gap-2 mt-5 lg:mt-0 lg:gap-6 font-normal'>
                    <li>
                        <a href="/LandingPage">Home</a>
                    </li>
                    <li>
                        <a href="/Section3">Portfolio</a>
                    </li>
                    <li>
                        <a href="/Section2">About me </a>
                    </li>
                    <li>
                        <a href="/Section5">Contact</a>
                    </li>
                    <li>
                        <a href="/Section4">Testimonials</a>
                    </li>
                </ul>
            </div>


            <div className='flex mt-5 lg:mt-0 gap-5'>
                <img src={sc1} alt="icons" />
                <img src={sc2} alt="icons" />
                <img src={sc3} alt="icons" />
                <img src={sc4} alt="icons" />

            </div>
        </div>



        <div className='flex flex-col lg:flex-row justify-between items-center py-10'>
            <div>
                <p>Made with 💖 by Airdokan</p>
            </div>
            <div className='flex gap-5 mt-5 lg:mt-0 justify-center text-center'>
                <a href="/LandingPage">Privacy Policy</a>
                <a href="/LandingPage">Terms of Service</a>
                <a href="/LandingPage">Cookies Settings</a>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Footer