"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { webSummitData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const WebSummitFooter: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white text-center px-4 w-full h-auto bg-white/15 rounded-3xl">
      <hr className=' w-full border-magenta border-dashed border-4'></hr>
      <hr className='ml-3 w-full border-cean border-dashed border-4 mb-2'></hr>
      
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
          {webSummitData.bottomSection.mainText}
        </motion.h2>
        <Image 
            src='/websummit/back-1.webp'
            alt={webSummitData.title}
            width={2000}
            height={725}
            className="object-cover w-1/2 md:flex hidden z-0 rounded-lg mb-2"
        />
        <Image 
              src='/websummit/back-2.webp'
              alt={webSummitData.title}
              width={2000}
              height={725}
              className="object-cover h-auto w-full rounded-lg md:hidden flex mb-2"
        />
        <motion.p
          className="text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {webSummitData.dateLocation}
        </motion.p>
        
        <Link
          href='/#contact-us'
          arria-label='navigate to the form'
          className='mt-2 max-w-[300px] rounded-xl cursor-pointer hover:scale-105  transition duration-300 ease-in-out hover:shadow-lg hover:text-magenta'
        >
          <hr className='w-full border-magenta border-dashed border-4'></hr>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {webSummitData.appointmentText}
            </motion.p>
          <hr className='w-full border-cean border-dashed border-4 '></hr>
        </Link>


        <Link
          href='/#websummit'
          arria-label='navigate to the form'
          className='mt-4'
        >
          <Image 
              src={webSummitData.websummitLogoWhite}
              alt={webSummitData.title}
              width={1000}
              height={500}
              className="object-cover h-auto w-[150px] z-10
                          hover:scale-105  transition duration-300 ease-in-out 
                          cursor-pointer hover:rotate-2  flex
                          "
          />          
        </Link>
      </motion.div>
      <hr className='ml-3 mt-4 w-full border-magenta border-dashed border-4'></hr>
      <hr className='w-full border-cean border-dashed border-4'></hr>
    </div>
  );
};

export default WebSummitFooter;
