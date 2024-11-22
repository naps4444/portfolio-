import React from 'react'
import Stars from './../assets/Stars.svg'
import av1 from './../assets/av1.svg'
import av2 from './../assets/av2.svg'
import av3 from './../assets/av3.svg'
import Tescarousel from '../SmallerComponents/Tescarousel'

const Section4 = () => {
  return (
    <>
      <div className='w-11/12 mx-auto container py-20'>
        <div>
          <p className='text-[#5E3BEE] font-medium'>Client Feedback</p>
          <h1 className='font-semibold text-[20px] lg:text-[35px] text-[#282938]'>Customer Testimonials</h1>
        </div>

        <div className='lg:hidden mt-10'>
          <Tescarousel />
        </div>

        <div className='hidden lg:grid grid-cols-3 gap-8 items-center justify-between py-10'>
          {/* Testimonial 1 */}
          <div className='border border-[#006B6A] rounded p-8 shadow-lg lg:w-[400px]'>
            <div>
              <img src={Stars} alt="Stars" className='w-30 h-30' />
              <p className='mt-5 text-[#282938] text-lg italic'>
                "The service provided was beyond expectations! It was seamless, professional, and truly made a difference in our business. We've seen significant improvements in customer satisfaction and engagement thanks to this team!"
              </p>
            </div>

            <div className='flex items-center mt-5 gap-4'>
              <img src={av1} alt="Dianne Russell" className='w-16 h-16 rounded-full' />
              <div className='flex flex-col'>
                <p className='text-xl font-semibold text-[#282938]'>Dianne Russell</p>
                <p className='font-medium text-[#006B6A]'>Starbucks</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className='border border-[#006B6A] rounded p-8 shadow-lg lg:w-[400px]'>
            <div>
              <img src={Stars} alt="Stars" className='w-30 h-30' />
              <p className='mt-5 text-[#282938] text-lg italic'>
                "This was a game changer for our brand. The collaboration was smooth, and the results were immediate. We've never had such positive feedback from our clients and saw a noticeable boost in sales within the first month!"
              </p>
            </div>

            <div className='flex items-center mt-5 gap-4'>
              <img src={av2} alt="Kristin Watson" className='w-16 h-16 rounded-full' />
              <div className='flex flex-col'>
                <p className='text-xl font-semibold text-[#282938]'>Kristin Watson</p>
                <p className='font-medium text-[#006B6A]'>Louis Vuitton</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className='border border-[#006B6A] rounded p-8 shadow-lg lg:w-[400px]'>
            <div>
              <img src={Stars} alt="Stars" className='w-30 h-30' />
              <p className='mt-5 text-[#282938] text-lg italic'>
                "I cannot recommend this team enough! They completely transformed the way we approach our projects. Their attention to detail and personalized service helped us exceed all our goals for this year."
              </p>
            </div>

            <div className='flex items-center mt-5 gap-4'>
              <img src={av3} alt="Kathryn Murphy" className='w-16 h-16 rounded-full' />
              <div className='flex flex-col'>
                <p className='text-xl font-semibold text-[#282938]'>Kathryn Murphy</p>
                <p className='font-medium text-[#006B6A]'>McDonald's</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4
