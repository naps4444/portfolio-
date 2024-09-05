import React from 'react'
import Stars from './../assets/Stars.svg'
import av1 from './../assets/av1.svg'
import av2 from './../assets/av2.svg'
import av3 from './../assets/av3.svg'
import Tescarousel from '../SmallerComponents/Tescarousel'

const Section4 = () => {
  return (
    <>
    <div className='w-11/12 mx-auto container py-20 '>
        <div>
            <p>Clients Feedback</p>

            <h1 className='font-semibold text-[20px] lg:text-[35px] '>Customer testimonials</h1>
        </div>



        <div className='lg:hidden mt-10'>
            <Tescarousel/>
        </div>






        <div className='hidden lg:grid grid-cols-3 gap-8 items-center justify-between py-10'>
            <div className='border border-[#006B6A] rounded p-8'>

                <div>
                    <img src={Stars} alt="stars" />
                    <p className='mt-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                </div>

                <div className='flex items-center mt-5 gap-4'>
                    <img src={av1} alt="" />

                    <div className='flex flex-col'>
                        <p className=' text-xl font-semibold'>Dianne Russell</p>
                        <p className='font-medium'>Starbucks</p>
                    </div>
                </div>

            </div>




            <div className='border border-[#006B6A] rounded p-8'>

                <div>
                    <img src={Stars} alt="stars" />
                    <p className='mt-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                </div>

                <div className='flex items-center mt-5 gap-4'>
                    <img src={av2} alt="" />

                    <div className='flex flex-col'>
                        <p className=' text-xl font-semibold'>Kristin Watson</p>
                        <p className='font-medium'>Louis Vuitton</p>
                    </div>
                </div>

            </div>







            <div className='border border-[#006B6A] rounded p-8'>

                <div>
                    <img src={Stars} alt="stars" />
                    <p className='mt-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                </div>

                <div className='flex items-center mt-5 gap-4'>
                    <img src={av3} alt="" />

                    <div className='flex flex-col'>
                        <p className=' text-xl font-semibold'>Kathryn Murphy</p>
                        <p className='font-medium'>McDonald's</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
        
    </>
  )
}

export default Section4