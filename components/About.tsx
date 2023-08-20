import React from 'react'
import {motion} from "framer-motion"
type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col h-screen relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        
        <motion.img 
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            viewport={{
                once:true
            }}
            src="https://avatars.githubusercontent.com/u/59064504?v=4" 
            alt="" 
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'/>
    </div>
  );
}

export default About