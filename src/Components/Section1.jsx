import React from 'react'
import s1 from './../assets/s1.svg'
import s2 from './../assets/s2.svg'
import s3 from './../assets/s3.svg'
import s4 from './../assets/s4.svg'
import Carousel from '../SmallerComponents/Carousel'

const Section1 = () => {
  return (
    <>

<div className='py-20 text-[#282938] w-11/12 container mx-auto'>
            <p className='font-semibold text-sm'>My Skills</p>
            <h1 className='text-[36px] font-bold'>My Expertise</h1>
        </div>

    <div className='lg:hidden'>
        <Carousel/>
    </div>
    <div className='hidden lg:block w-11/12 px-4 container mx-auto'>
        <div className='py-20 text-[#282938]'>
            <p className='font-semibold text-sm'>My Skills</p>
            <h1 className='text-[36px] font-bold'>My Expertise</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-4 lg:gap-6 text-[#282938] pb-20'>
            <div className='bg-[#F5FCFF] p-2 md:p-6 flex flex-col gap-6 rounded  hover:border-b-[4px] hover:rounded-lg hover:border-[#5E3BEE]'>
                <div className='bg-white w-14 p-2 rounded shadow'>
                <img src={s1} alt='img' className=''/>
                </div>

                <h1 className='font-bold'>Responsive Design</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='bg-[#F5FCFF] p-2 md:p-6 flex flex-col gap-6 rounded hover:border-b-[4px] hover:rounded-lg hover:border-[#5E3BEE]'>
                <div className='bg-white w-14 p-2 rounded shadow'>
                <img src={s2} alt='img' className=''/>
                </div>

                <h1 className='font-bold'>Front-End Frameworks</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='bg-[#F5FCFF] p-2 md:p-6 flex flex-col gap-6 rounded hover:border-b-[4px] hover:rounded-lg hover:border-[#5E3BEE]'>
               <div className='bg-white w-14 p-2 rounded shadow'>
                <img src={s3} alt='img' className=''/>
                </div>
            

                <h1 className='font-bold'>Testing and Debugging</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='bg-[#F5FCFF] p-2 md:p-6 flex flex-col gap-6 rounded hover:border-b-[4px] hover:rounded-lg hover:border-[#5E3BEE]'>
                <div className='bg-white w-14 p-2 rounded shadow'>
                <img src={s4} alt='img' className=''/>
                </div>

                <h1 className='font-bold'>Cloud Services</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>

        </div>
    </div>
        
    </>
  )
}

export default Section1