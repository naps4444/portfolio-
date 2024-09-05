import React from 'react'
import NavBar from '../SmallerComponents/NavBar'
import Hero from '../SmallerComponents/Hero'
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
    <div className='mx-auto lg:w-11/12 container'>
        <NavBar/>
    </div>
    <div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
       <Hero/>
    </motion.div>
   
    </div>
        
    </>
  )
}

export default LandingPage