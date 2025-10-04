import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { animate, motion } from 'framer-motion';
const Navbar = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const [toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(true)
    console.log("true")
  }

  const hide = () => {
    setToggle(false);
    console.log("false")
  }
  return <>
    <div className='w-[100%] fixed top-0 left-0 right-0  md:px-[40px] bg-gray-800 shadow-lg shadow-gray-600 py-[20px] '>
      <motion.nav className='w-[100%] flex justify-between items-center px-[20px]'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <motion.div className='text-4xl font-bold text-[#f4052dcd]'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>

          portfolio
        </motion.div>
        <motion.ul className=' hidden md:flex justify-center  items-center text-white gap-[24px] text-[18px]' animate={{ transition: { staggerChildren: 0.1 } }} >
          <motion.li className='' variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.90 }}>
            <a href="#" className="relative group   text-white">
              Home
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-[100%]"></span>
            </a>
          </motion.li>
          <motion.li className='' variants={fadeInUp}>
            <a className='relative group   text-white' href="#skill">Skills
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-[100%]"></span>
            </a>
          </motion.li>
          <motion.li className='' variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.90 }}>
            <a className='relative group text-white' href='#project'>Project
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-[100%]"></span>
            </a>
          </motion.li>
          <motion.li className='' variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.90 }}>
            <a className='relative group text-white' href='#contact'>Contact
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-[100%]"></span>
            </a>
          </motion.li>
         
        </motion.ul>
         <motion.div className='absolute right-[30px] md:hidden'>
            < MdOutlineMenu onClick={show} size={30} className='text-white' />
          </motion.div>
      </motion.nav>
      {/* <div className={`w-[100%] h-[400px] absolute top-[80px]  ${toggle?"right-0":"right-[-100%]"} md:hidden`}>
        <ul className='w-[100%] h-[100%] flex justify-center items-center flex-col gap-[20px] bg-gray-900 text-white border-2 relative'>
          <li className='text-[24px]'>Home</li>
          <li className='text-[24px]'>Skills</li>
          <li className='text-[24px]'>Projects</li>
          <li className='text-[24px]'>Contact</li>
          <li className='text-[24px] absolute top-[10px] right-[20px]' >X</li>
        </ul>
      </div> */}
      <div
  className={`w-[100%] z-50 h-[400px] fixed top-[80px] transition-transform duration-300 md:hidden 
    ${toggle ? "translate-x-0 " : "translate-x-full"}`}
    
>
  <ul className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-5 bg-gray-900 text-white  relative">
    <li onClick={()=>setToggle(false)} className="text-[24px]">Home</li>
    <li onClick={()=>setToggle(false)} className="text-[24px]">Skills</li>
    <li onClick={()=>setToggle(false)} className="text-[24px]">Projects</li>
    <li onClick={()=>setToggle(false)} className="text-[24px]">Contact</li>
    <li className="text-[24px] absolute top-[10px] right-[20px]" onClick={()=>setToggle(false)}>X</li>
  </ul>
</div>

    </div>



  </>
}

export default Navbar