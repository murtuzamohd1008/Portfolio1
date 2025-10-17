
import React from 'react'
import { animate, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Prism as syntaxHighlighter } from 'react-syntax-highlighter';

import mmm from '../assets/mur.png';
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
      <motion.section id='hero' className='w-[100%] min-h-[100vh] mx-auto py-[200px] bg-[#1c1717]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-[50px] w-[100%] md:w-[80%] h-[100%] mx-auto">
          <motion.div className='w-[100%] md:w-[60%] mx-auto flex flex-col justify-center items-center md:items-start md:ml-[-10px] ' variants={straggerContainer} initial="initial" animate="animate">
            <motion.div className='mb-[10px]'
                 initial={{opacity:0,x:-150}}
          whileInView={{opacity:1.5,x:0}}
          transition={{duration:1,ease:"easeOut"}}
            >
              <span className='transition-all duration-200 hover:bg-blue-400 text-white px-[10px] py-[4px] border-2 border-blue-400 rounded-full'>👋 hello, I'm</span>
            </motion.div>
            <motion.h1 className='text-white font-semibold text-[20px] mt-[20px] bg-gradient-to-r from-blue-400 to-[#807171] bg-clip-text text-transparent' variants={fadeInUp}
              initial={{opacity:0,x:-170}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.5,ease:"easeOut"}}
            >
              Mohd Murtuza
            </motion.h1>
            <div className="text-[30px] font-semibold text-white "
                 initial={{opacity:0,x:-180}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.5,ease:"easeOut"}}
            >
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "React Enthusiast", "MERN Stack Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75, // typing speed
                  deleteSpeed: 50, // deleting speed
                }}
              />
            </div>
            <motion.p className='w-[90%] text-white mt-[10px] text-center md:text-left' variants={fadeInUp}
                 initial={{opacity:0,x:-170}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.5,ease:"easeOut"}}
             >
              I'm a passionate MERN Stack Developer with a strong focus on building responsive, scalable, and user-friendly web applications. I enjoy turning ideas into reality using React, Node.js, Express, and MongoDB. As a React enthusiast, I love crafting dynamic UIs, exploring new tools, and constantly improving my skills to deliver modern digital experiences.
            </motion.p>

            <motion.div variants={straggerContainer} className='flex items-center gap-[20px] mt-[30px]'>
              <motion.a
                 initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:2.5,ease:"easeOut"}}
               whileHover={{
                scale: 1.05
              }} href='#project' className='bg-blue-400  border-gray-200 border-2 px-[28px] py-[6px] rounded-full text-black transition-all duration-200 hover:bg-[#2b2424] hover:text-blue-400'>my work</motion.a>
              <motion.a 
                 initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:2.5,ease:"easeOut"}}
              href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='bg-blue-400  border-gray-200 border-2 px-[28px] py-[6px] rounded-full text-black transition-all duration-200 hover:bg-[#2b2424] hover:text-blue-400' 
                whileTap={{
                  scale: 0.95
                }}
              >view resume</motion.a>


            </motion.div>

            <motion.div className='flex items-center  gap-[10px] mt-[15px] -z-0' variants={straggerContainer}>
              <motion.a
               initial={{opacity:0,y:70}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7,ease:"easeOut"}}
               href='https://github.com/murtuzamohd1008' className='bg-black p-[12px] text-white rounded-full shadow-lg shadow-gray-500 transform transition-transform duration-200 hover:scale-110'>
                <FaGithub size={20} className='rounded-full' />
              </motion.a>
              <motion.a 
               initial={{opacity:0,y:80}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7,ease:"easeOut"}}
              href='https://www.linkedin.com/in/mohd-murtuza-05884129b' className='bg-white p-[12px] text-blue-600 rounded-full shadow-lg shadow-gray-500 transform transition-transform duration-200 hover:scale-110'>
                <FaLinkedin size={20} className=''/>
              </motion.a>

            </motion.div>
          </motion.div>

          {/* <motion.div className='w-[100%] md:w-[40%] ' initial={{ opacity: 0, x: 200 }}
           whileInView={{ opacity:1,x: 0 }} 
           transition={{ duration: 2.5}}>
            <div className='w-[270px] h-[270px] md:w-[300px] md:h-[300px]] mx-auto rounded-full backdrop-blur-3xl bg-blue-400 p-4 '>
                <motion.img

                 src={mmm} 
                 alt="" 
        
                 className='w-[100%] h-[100%]  rounded-full'/>
            </div>

          </motion.div> */}
          <motion.div 
          initial={{ opacity: 0, x: 200 }}
           whileInView={{ opacity:1,x: 0 }} 
           transition={{ duration: 2.5}}
          className="relative w-64 h-64 flex items-center justify-center">
  {/* Smoky blur background */}
  <div className="absolute w-72 h-72 bg-blue-400 opacity-40 blur-3xl rounded-full"></div>
  <div className="absolute w-64 h-64 bg-blue-300 opacity-30 blur-2xl rounded-full"></div>

  {/* Image */}
  <img
    src={mmm}
    alt="example"
    className="relative w-60 h-60 object-center rounded-full"
  />
</motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Hero