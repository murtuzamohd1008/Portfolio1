
import React from 'react'
import { motion } from 'framer-motion'
import html from '../assets/html.jpg';
import css from '../assets/css.webp';
import js from '../assets/js.png'
import react from '../assets/react.jpeg';
import node from '../assets/node.jpeg';
import mongo from '../assets/mongo.jpeg'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.jpeg'
import mern from '../assets/mern.webp'
import frontend from '../assets/frontend.jpg'
import reacttail from '../assets/reacttail.jpg'
import Card from './Card';
const About = () => {
  return <>
    <motion.div id='about' className=' w-[100vw] min-h-[100%] pt-[100px] pb-[100px] flex justify-center items-center  bg-[#1c1717]'>
      <motion.div className='w-[100%] md:w-[84%] mx-auto flex gap-[100px] md:gap-0 flex-col md:flex-row'>
        <motion.div className='md:w-[50%] w-[100%] h-[100%] flex'>
          <motion.div className='md:w-[30%] w-[50%] h-[100%] '>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }} 
              id='circle1' className='md:w-[80px] w-[60px] mx-auto h-[60px]  md:h-[80px] bg-blue-400 rounded-full relative z-10'></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              id='line1' className='w-[4px] mx-auto h-[160px] md:h-[100px] bg-blue-400'></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              id='circle2' className='md:w-[80px] mx-auto w-[60px] h-[60px]  md:h-[80px] bg-blue-400 rounded-full  relative z-10'></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              id='line2' className='w-[4px] mx-auto h-[160px] md:h-[100px] bg-blue-400'></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              id='circle3' className='md:w-[80px] mx-auto w-[60px] h-[60px]  md:h-[80px] bg-blue-400 rounded-full  relative z-10'></motion.div>
          </motion.div>
          <motion.div className='md:w-[70%] w-[50%] h-[100%] flex justify-start flex-col gap-[50px]'>
            <motion.div initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <motion.h1 className='md:text-[30px] text-[25px] font-bold bg-gradient-to-r from-blue-400 to-[#1a1818] bg-clip-text text-transparent'>
                PERSONAL INFO
              </motion.h1>
              <motion.div className='text-white'>
                <motion.p>Name: Mohd Murtuza</motion.p>
                <motion.p> Gender: Male</motion.p>
                <motion.p> Language: Hindi,English</motion.p>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <motion.h1 className='md:text-[30px] text-[25px] font-bold bg-gradient-to-r from-blue-400 to-[#1a1818] bg-clip-text text-transparent'>
                EDUCATION
              </motion.h1>
              <motion.div className='text-white'>
                <motion.p>Degree: B.Tech</motion.p>
                <motion.p> Branch: Information Technology</motion.p>
                <motion.p> CGPA: 7.1</motion.p>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <motion.h1 className='md:text-[30px] font-bold text-[25px] bg-gradient-to-r from-blue-400 to-[#1a1818] bg-clip-text text-transparent'>
                SKILLS
              </motion.h1>
              <motion.div className='text-white'>
                <motion.p></motion.p>Frontend developer
                <motion.p>React.js Enthusiast</motion.p>
                <motion.p>MERN Stack DEVELOPER</motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className='md:w-[50%] w-[100%] mx-auto h-[100%] flex justify-center  gap-[20px] flex-col'>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='flex justify-center w-[80%] md:w-[45%] h-[160px] mx-auto'>
            <Card image={mern} text={'MERN DEVELOPER'} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='flex justify-center w-[80%] md:w-[45%] h-[160px]  mx-auto'>
            <Card image={frontend} text={'FRONTEND DEVELOPER'} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='flex justify-center w-[80%] md:w-[45%] h-[160px]  mx-auto'>
            <Card image={reacttail} text={'REACT DEVELOPER'} />
          </motion.div>
        </motion.div>
      </motion.div>


    </motion.div>
  </>
}

export default About