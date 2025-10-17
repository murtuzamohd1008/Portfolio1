import React from 'react'
import { motion } from 'framer-motion'

import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let YOUR_PUBLIC_KEY=import.meta.env. VITE_YOUR_PUBLIC_KEY
     let service_id=import.meta.env.VITE_service_id
    let YOUR_TEMPLATE_ID=import.meta.env. VITE_YOUR_TEMPLATE_ID
    emailjs
      .sendForm(service_id, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('message sent successfully');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send message.');
          console.log('FAILED...', error.text);
        },
      );
  };

  const straggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <>
      <motion.section id='contact' className='w-[100%] min-h-[100vh] flex justify-center items-center  bg-[#1c1717] pt-[40px] pb-[300px] md:pb-[100px]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>

        <motion.div className='w-[100%] md:w-[60%] mx-auto  mt-[60px] flex flex-col-reverse md:flex-row gap-[50px] md:gap-1' variants={straggerContainer}>
               <motion.div className='md:w-[50%] w-[90%] mx-auto md:mx-0 h-[100%] flex flex-col gap-[70px]'>
                   <motion.h1 className='text-[35px] hidden md:block font-bold bg-gradient-to-r from-blue-400 to-[#695a5a] bg-clip-text text-transparent'>
                     let's work togather
                   </motion.h1>
                   <motion.div className='flex justify-start gap-[40px] flex-col text-blue-300'>
                       <motion.div
                         initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
                        className='flex justify-start items-center gap-[10px]'>
                        <div id='mail' className='w-[50px] h-[50px] bg-blue-400 flex justify-center items-center text-white rounded-full'>
                              <IoMail id='mail' size={24}/>
                        </div>
                          
                           <p className='text-[18px]'>murtuzamohd1008@gmail.com</p>
                       </motion.div>
                        <motion.div
                           initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
                         className='flex justify-start items-center gap-[10px]'>
                          <div id='linkdin'  className='w-[50px] h-[50px] bg-blue-400 flex justify-center items-center text-white rounded-full'>
                                   <IoLogoLinkedin size={26} className=''/>
                          </div>
                       
                           <p className='text-[18px]'>www.linkedin.com/in/mohd-murtuza-05884129b</p>
                       </motion.div>
                         <motion.div
                            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
                          className='flex justify-start items-center gap-[10px]'>
                          <div id='phone' className='w-[50px] h-[50px] bg-blue-400 flex justify-center items-center text-white rounded-full'>
                                <FaPhone size={24}/>
                          </div>
                         
                           <p className='text-[18px]'>+917348614044</p>
                       </motion.div>
                        
                   </motion.div>
               </motion.div>
          <motion.form ref={form} onSubmit={sendEmail}
               initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=' w-[90%] md:w-[50%] bg-[#514949] mx-auto flex justify-center items-center flex-col gap-[20px] py-[40px] rounded-2xl' variants={straggerContainer}>
            <motion.input
                 initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
             className='w-[90%] md:w-[75%] h-[43px] bg-transparent text-blue-300 border-[1px] border-blue-400 outline-blue-400 rounded-md px-[10px]' type="text" placeholder='enter name...' name='user_name' />
            <motion.input 
                 initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
             className='w-[90%] md:w-[75%] h-[43px] bg-transparent text-blue-300 border-[1px] border-blue-400 outline-blue-400  rounded-md px-[10px]' type="email" name="user_email" id="" placeholder='enter email...' />
            <motion.textarea
               initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
             rows={3} className='w-[90%] md:w-[75%] h-[120px] py-[10px] text-blue-300 bg-transparent border-[1px] border-blue-400 outline-blue-400  rounded-md px-[10px]' name="user_message" id="" placeholder='message me...'></motion.textarea>
            <motion.input 
               initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
             className='w-[90%] md:w-[75%] h-[43px] bg-blue-400 text-white  font-semibold rounded-md px-[10px]' type="submit" value="send me" />
          </motion.form>
        </motion.div>


      </motion.section>
    </>
  )
}

export default Contact