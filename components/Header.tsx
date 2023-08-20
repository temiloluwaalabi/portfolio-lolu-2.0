import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex overflow-hidden flex-row items-start justify-between sticky top-0 p-5 max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            className='flex flex-row items-center'
            initial={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}    
            transition={{
                duration:1.5,
            }}      
        >
            {/* social icons */}
            <SocialIcon url='https://www.youtube.com/' fgColor='grey' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com/' fgColor='grey' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com/' fgColor='grey' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com/' fgColor='grey' bgColor='transparent' />
        </motion.div>

        <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center cursor-pointer text-gray-300'

            
        >
        <SocialIcon className='cursor-pointer' network='email' fgColor='grey' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
    </header>
  )
}