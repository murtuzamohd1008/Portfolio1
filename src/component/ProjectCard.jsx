import React from 'react'
import {motion} from 'framer-motion'
const ProjectCard = ({image,text,live,github,giturl,liveurl}) => {
  return (
    <motion.div id='projectcard' className='w-[90%] md:w-[100%] md:h-[100%] h-[90%] mx-auto md:mx-0 overflow-hidden relative rounded-lg'>
          <motion.div className='w-[100%] h-[100%] rounded-lg'>
              <motion.img className='w-full h-full rounded-md object-center' src={image} alt='' />
          </motion.div>
          <motion.div id='projecthover' className='w-[100%] h-[100%] transition-all duration-200 absolute top-0 transform translate-y-[100%] flex justify-center  flex-col gap-[20px] bg-[#4f4343] rounded-lg'>
             <h1 className='text-center font-bold text-[30px] text-blue-400 mb-[20px]'>{text}</h1>
             <div className='flex justify-around items-center gap-[0px] mt-[60px]'>
                <a className='text-black text-[18px] bg-blue-400 px-[40px] py-[7px] rounded-lg shadow-md shadow-blue-300' href={giturl}>{github}</a>
                <a className='text-black text-[18px] bg-blue-400 px-[40px] py-[7px] rounded-lg shadow-md shadow-blue-300'  href={liveurl}>{live}</a>
             </div>
          </motion.div>
    </motion.div>
  )
}

export default ProjectCard