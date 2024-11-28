"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGlobe, FaLanguage } from 'react-icons/fa';


  



const LanguageSwitcherNav = () => {

  const [currentDomain, setCurrentDomain] = useState<string | null>(null);

  useEffect(() => {
    // This code runs only on the client side
    if (typeof window !== 'undefined') {
      setCurrentDomain(window.location.hostname);
    }
  }, []);

  const addSubdomain = () => {
    if (currentDomain) {
      const newDomain = currentDomain.replace('www.', '').replace('nl.', '');
      const newDomainWithSubdomain = newDomain.startsWith('www.') ? `www.nl.${newDomain}` : `nl.${newDomain}`;
      window.location.href = `${window.location.protocol}//${newDomainWithSubdomain}${window.location.pathname}`;
    }
  };

  const removeSubdomain = () => {
    if (currentDomain && currentDomain.startsWith('nl.')) {
      const newDomain = currentDomain.replace('nl.', '');
      window.location.href = `${window.location.protocol}//${newDomain}${window.location.pathname}`;
    }
  };



  return (
    
      <div className='w-full flex justify-center items-center gap-2 py-1'>
        <button
          className="text-MainColor font-bold  rounded flex flex-row gap-1 justify-center items-center"
          onClick={addSubdomain}          
          aria-label='Overstappen op Nederlands'
        >
            <FaGlobe />
            Dutch
          <Image
            src="/icons/flags/nl.svg"
            alt='flag Netherlands'
            title='Overstappen op Nederlands'
            width={50}
            height={50}            
            className='w-[20px] rounded-xl h-auto 
            hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 opacity-80 hover:opacity-100 hover:shadow-inner 
            '/>
        </button>
        {/* <button
          className=" text-MainColor font-bold  rounded"
          onClick={removeSubdomain} 
          disabled         
          aria-label='Switch to English'
        >
          <Image
            src="/icons/flags/gb.svg"
            alt='Switch to English'
            title='Switch to English'
            width={50}
            height={50}
            className='w-[50px] rounded-xl h-auto 
            hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1  opacity-55 hover:shadow-inner 
            border ring-offset-2 border-color-MainColor shadow-inner hover:animate-spin
            '/>
        </button> */}
      </div>
  )
}

export default LanguageSwitcherNav