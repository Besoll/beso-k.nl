"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { cyberData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const WebSummitFooter: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white text-center px-4 w-full h-auto  rounded-3xl">
      
      
      {/* Main overlay text with animations */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {cyberData.bottomSection.mainText}
        </motion.h2>
        <Image 
            src='/websummit/beso-cyber-horiz.webp'
            alt={cyberData.title}
            width={3000}
            height={1649}
            className="object-cover w-full md:flex hidden z-0 rounded-lg mb-2"
        />
        <Image 
              src='/websummit/beso-cyber.webp'
              alt={cyberData.title}
              width={2000}
              height={1500}
              className="object-cover h-auto w-full rounded-lg md:hidden flex mb-2"
        />
        <motion.p
          className="text-sm md:text-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {cyberData.dateLocation}
        </motion.p>
        


        <Link
          href='/#hero'
          arria-label='navigate to the form'
          className='mt-4'
        >
          <Image 
              src={cyberData.websummitLogoWhite}
              alt={cyberData.title}
              width={1000}
              height={500}
              className="object-cover h-auto w-[150px] z-10 grayscale-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:rotate-2 flex"
          />          
        </Link>
      </motion.div>
     
    </div>
  );
};

export default WebSummitFooter;
