import React from 'react'
import {motion} from "framer-motion";
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        className='relative flex justify-center items-center'

        initial={{
            opacity:0
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius:["20%","20%","50%","80%","20%"]
        }}
    
        transition={{
            duration:2.5
        }}
    >
        <div className='absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 ' />
        <div className='absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52 ' />
        <div className='rounded-full border border-[#f7ab0a] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52 ' />
    </motion.div>
  )
}

export default BackgroundCircles