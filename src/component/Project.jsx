
// import React from 'react'
// import {motion} from 'framer-motion'
// import portfolio from '../assets/portfolio.png';
// import chatapp from '../assets/chatapp.webp';
// import ecommerce from '../assets/ecommerce.jpg'
// const Project = () => {

//      const fadeInUp={
//           initial:{z:(0,0,0)},
//           animate:{z:(0,-20,0)},
//           transition:{duration:0.6,repeat:Infinity}
//         }
//         const straggerContainer={
//           animate:{
//             transition:{
//               staggerChildren:0.1,
//             },
//           },
//         }
//   return (
//    <>
//      <motion.section className='bg-gradient-to-r from-purple-950 to-gray-900 w-[100%]  min-h-[100vh] pb-[150px] pt-[40px] ' id='project' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.4}}>
//                      <motion.h1 className='text-center font-bold text-[30px] text-white ' initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
//                        Project
//                      </motion.h1>
//                      <motion.div className='w-[90%] md:w-[70%]  mx-auto flex justify-center items-center flex-wrap gap-[20px] mt-[100px]' variants={straggerContainer}>
//                           <motion.div className='w-[85%] md:w-[25%] h-[350px] border-2 border-gray-700 rounded-lg flex justify-center   bg-gray-800 flex-col gap-[30px] shadow-lg shadow-gray-800' whileHover={{y:-20}} transition={{duration:0.2}}>
//                             <div className='text-center'>
//                                    <img className='w-[200px] mx-auto h-[200px] rounded-lg' src={portfolio} alt="" />
//                             </div>
//                              <div className=' text-center'>
//                               <h3 className='text-[20px] text-white font-semibold mb-2'>portfolio</h3> 
//                                 <a className='text-15px text-blue-600' href="">check</a>
//                              </div>

//                           </motion.div>
//                            <motion.div className='w-[85%] md:w-[25%] h-[350px] border-2 border-gray-700 rounded-lg flex justify-center   bg-gray-800 flex-col gap-[20px] shadow-lg shadow-gray-800' whileHover={{y:-20}} transition={{duration:0.2}}>
//                             <div className='text-center'>
//                                  <img className='w-[200px] mx-auto h-[200px] rounded-lg' src={chatapp} alt="" />
//                             </div>

//                              <div className='text-center'>
//                               <h3 className='text-[20px] text-white font-semibold'>chat app</h3>
//                                <a className='text-15px text-blue-600' href="">check</a>
//                              </div>

//                           </motion.div>

//                            <motion.div className='w-[85%] md:w-[25%] h-[350px] border-2 rounded-lg border-gray-700 flex justify-center   bg-gray-800 flex-col gap-[20px] shadow-lg shadow-gray-800' whileHover={{y:-20}} transition={{duration:0.2}}>
//                             <div>
//                                 <img className='w-[200px] mx-auto h-[200px] rounded-lg' src={ecommerce} alt="" />
//                             </div>

//                              <div className='text-center'>
//                               <h3 className='text-[20px] text-white font-semibold'>E-Commerce </h3>
//                              <a className='text-15px text-blue-600' href="">check</a>
//                              </div>

//                           </motion.div>
//                      </motion.div>
//      </motion.section>
//    </>
//   )
// }

// export default Project

import React from 'react'
import { motion } from 'framer-motion'
import portfolio from '../assets/portfolio.png'
import chatapp from '../assets/chatapp.png'
import ecommerce from '../assets/ecommerce.webp'
import chatbot from '../assets/chatbot.jpg'
import Card from './Card'
import ProjectCard from './ProjectCard'
const Project = () => {

  return (
    <>
      <motion.section
        className="bg-[#1c1717] min-h-[100vh] flex justify-center items-center pb-[150px] pt-[40px]"
        id="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div className='w-[100%] h-[100%]'>
          <motion.div className='w-[100%] md:w-[90%] mx-auto h-[100%] flex justify-center flex-wrap gap-[20px]  '>
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='w-[90%] md:w-[300px] h-[300px] '>
              <ProjectCard image={chatapp} text={'Realtime Chat App'} live={'live'} github={'github'}/>
            </motion.div>
              <motion.div
              initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
               className='w-[90%] md:w-[300px] h-[300px] '>
              <ProjectCard image={ecommerce} text={'E-Commerce'} live={'live'} github={'github'}/>
            </motion.div>
              <motion.div
               initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
               className='w-[90%] md:w-[300px] h-[300px] '>
              <ProjectCard image={portfolio} text={'Portfolio'} live={'live'} github={'github'}/>
            </motion.div>
              <motion.div
              initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
               className='w-[90%] md:w-[300px] h-[300px] '>
              <ProjectCard image={chatbot} text={'Smart Chatbot'} live={'live'} github={'github'}/>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Project
