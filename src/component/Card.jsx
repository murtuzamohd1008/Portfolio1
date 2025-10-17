import React from 'react'

const Card = ({image,text}) => {
  return (
    <div id='card' className='w-[100%]  h-[100%px] bg-[#514949] relative overflow-hidden flex justify-center items-center rounded-lg'>
        <h1 className='text-[20px] text-blue-400 font-semibold'>{text}</h1>
        <div id='img-parent' className='w-[100%] h-[100%] transition-all duration-300 bg-gradient-to-t from-blue-300 to-[#9c8a8a] absolute transform translate-y-[100%]'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Card