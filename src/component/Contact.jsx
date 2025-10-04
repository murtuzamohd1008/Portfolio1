import React from 'react'
import {motion} from 'framer-motion'
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Contact = () => {

    const straggerContainer={
          animate:{
            transition:{
              staggerChildren:0.1,
            },
          },
        }
  return (
   <>
   <motion.section id='contact' className='w-[100%] h-[75vh] bg-gray-900 pt-[40px] pb-[100px]' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.3}}>
      <motion.h1 className='text-center font-bold text-[27px] text-white'>
            get in touch
          </motion.h1>
         <motion.div className='w-[100%] md:w-[60%] mx-auto text-center mt-[60px] ' variants={straggerContainer}>
        
         
          
              <motion.form className=' w-[100%] md:w-[60%] bg-gray-800 mx-auto flex justify-center items-center flex-col gap-[20px] py-[40px] rounded-2xl' variants={straggerContainer}>
                         <input className='w-[90%] md:w-[75%] h-[43px] bg-gray-700 rounded-md px-[10px]' type="text" placeholder='enter name...' name='name' />
                         <input className='w-[90%] md:w-[75%] h-[43px] bg-gray-700 rounded-md px-[10px]' type="email" name="email" id="" placeholder='enter email...'  />
                         <textarea  rows={3} className='w-[90%] md:w-[75%] h-[120px] py-[10px] bg-gray-700 rounded-md px-[10px]' name="message" id="" placeholder='message me...'></textarea>
                        <input className='w-[90%] md:w-[75%] h-[43px] bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md px-[10px]' type="submit" value="sene me" />
                    </motion.form>
          </motion.div>
                  
       
   </motion.section>
   </>
  )
}

export default Contact