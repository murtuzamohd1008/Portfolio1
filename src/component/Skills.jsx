
import React from 'react'
import {motion} from 'framer-motion'
const Skills = () => {
    
        const fadeInUp={
          initial:{z:(0,0,0)},
          animate:{z:(0,-20,0)},
          transition:{duration:0.6,repeat:Infinity}
        }
        const straggerContainer={
          animate:{
            transition:{
              staggerChildren:0.1,
            },
          },
        }
  return (
   <motion.section className='w-[100%] h-[100vh] text-center bg-gray-900 py-[40px] pb-[10px]' id='skill' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.7,ease:"easeInOut"}}  >
      <motion.div className='' variants={straggerContainer}>
        <motion.h1 className='text-center font-bold text-3xl text-white mt-[100px]'>
            Skills
        </motion.h1>
        <motion.div variants={straggerContainer} className='w-[70%] md:w-[40%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[170px] gap-y-[20px] gap-x-[20px] items-center '>

          <motion.div variants={straggerContainer} className=''>
            {/* <motion.span className='span' variants={fadeInUp}>css</motion.span><motion.div variants={fadeInUp} className='div'
            ></motion.div> */}
             <motion.h2 className='bg-gray-600 text-white py-[15px] rounded-md text-[20px] font-semibold' initial={{opacity:0}} animate={{opacity:1}} whileHover={{y:-20}} transition={{duration:0.1}}>Css</motion.h2>
        </motion.div>

          <motion.div variants={straggerContainer} className=''>
            {/* <motion.span className='span' variants={fadeInUp}>tailwind css</motion.span><motion.div variants={fadeInUp} className='div'
            ></motion.div> */}
             <motion.h2 className='bg-gray-600 text-white py-[15px] rounded-md text-[20px] font-semibold capitalize' initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} whileHover={{y:-20}} transition={{duration:0.1}} >Javascript</motion.h2>
        </motion.div>

          <motion.div variants={straggerContainer} className=''>
            {/* <motion.span className='span' variants={fadeInUp}>javascript</motion.span><motion.div variants={fadeInUp} className='div'
            ></motion.div> */}
             <motion.h2 className='bg-gray-600 text-white py-[15px] rounded-md text-[20px] font-semibold' initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} whileHover={{y:-20}} transition={{duration:0.1}} >React Js</motion.h2>
        </motion.div>

          <motion.div variants={straggerContainer} className=''>
            {/* <motion.span className='span' variants={fadeInUp}>react js</motion.span><motion.div variants={fadeInUp} className='div'
            ></motion.div> */}
             <motion.h2 className='bg-gray-600 text-white py-[15px] rounded-md text-[20px] font-semibold' initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} whileHover={{y:-15}} transition={{duration:0.1}} >Node Js</motion.h2>
        </motion.div>

          <motion.div variants={straggerContainer} className=''>
            {/* <motion.span className='span' variants={fadeInUp}>express js</motion.span><motion.div variants={fadeInUp} className='div'
            ></motion.div> */}
             <motion.h2 className='bg-gray-600 text-white py-[15px] rounded-md text-[20px] font-semibold' initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} whileHover={{y:-15}} transition={{duration:0.1}} >Express Js</motion.h2>
        </motion.div>

          <motion.div variants={straggerContainer} className=''>
            {/* <motion.span className='span' variants={fadeInUp}>node js</motion.span><motion.div variants={fadeInUp} className='div'
            ></motion.div> */}
             <motion.h2 className='bg-gray-600 text-white py-[15px] rounded-md text-[20px] font-semibold' initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} whileHover={{y:-15}} transition={{duration:0.1}}>Mongo DB</motion.h2>
        </motion.div>

        </motion.div>
      

      </motion.div>
   </motion.section>
  )
}

export default Skills