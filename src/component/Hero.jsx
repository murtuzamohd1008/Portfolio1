
import React from 'react'
import { animate, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Prism as syntaxHighlighter } from 'react-syntax-highlighter';
import mmm from '../assets/mmm.png';
import Typewriter from "typewriter-effect";
const Hero = () => {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  const straggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <>
      <motion.section id='hero' className='w-[100%] min-h-[100vh] mx-auto py-[200px] bg-gradient-to-r from-purple-600 to-pink-500'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex justify-center items-center flex-col md:flex-row gap-[50px] w-[100%] md:w-[80%] h-[100%] mx-auto">
          <motion.div className='w-[100%] md:w-[60%] mx-auto flex flex-col justify-center items-center md:items-start  ' variants={straggerContainer} initial="initial" animate="animate">
            <motion.div className='mb-[10px]'>
              <span className='bg-purple-500 text-white px-[10px] py-[4px] border-2 border-white rounded-full'>👋 hello, I'm</span>
            </motion.div>
            <motion.h1 className='text-white font-semibold text-[20px] mt-[20px]' variants={fadeInUp}>
              Mohd Murtuza
            </motion.h1>
            <div className="text-[30px] font-semibold text-white ">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "React Enthusiast", "MERN Stack Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75, // typing speed
                  deleteSpeed: 50, // deleting speed
                }}
              />
            </div>
            <motion.p className='w-[90%] text-white mt-[10px] text-center md:text-left' variants={fadeInUp} >
              I'm a passionate MERN Stack Developer with a strong focus on building responsive, scalable, and user-friendly web applications. I enjoy turning ideas into reality using React, Node.js, Express, and MongoDB. As a React enthusiast, I love crafting dynamic UIs, exploring new tools, and constantly improving my skills to deliver modern digital experiences.
            </motion.p>

            <motion.div variants={straggerContainer} className='flex items-center gap-[20px] mt-[30px]'>
              <motion.a whileHover={{
                scale: 1.05
              }} href='#project' className='bg-purple-500 text-white border-gray-200 border-2 px-[28px] py-[6px] rounded-full'>my work</motion.a>
              <motion.a href='#contact' className='bg-purple-500 text-white border-gray-200 border-2 px-[28px] py-[6px] rounded-full' whileHover={{
                scale: 1.05
              }}
                whileTap={{
                  scale: 0.95
                }}
              >contact me</motion.a>


            </motion.div>

            <motion.div className='flex items-center  gap-[10px] mt-[15px]' variants={straggerContainer}>
              <motion.a className='bg-black p-[12px] text-white rounded-full shadow-lg shadow-gray-500 transform transition-transform duration-200 hover:scale-110'>
                <FaGithub size={20} className='rounded-full' />
              </motion.a>
              <motion.a href='www.linkedin.com/in/mohd-murtuza-05884129b' className='bg-white p-[12px] text-blue-600 rounded-full shadow-lg shadow-gray-500 transform transition-transform duration-200 hover:scale-110'>
                <FaLinkedin size={20} className=''/>
              </motion.a>

            </motion.div>
          </motion.div>

          <motion.div className='w-[100%] md:w-[40%] ' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className='w-[270px] h-[270px] md:w-[300px] md:h-[300px]] mx-auto rounded-full'>
                <img src={mmm} alt="" className='w-[100%] h-[100%]  rounded-full'/>
            </div>

          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Hero