"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaLanguage } from 'react-icons/fa';


const LanguageSwitcher = ({
  switchLanguage
} : {
  switchLanguage: string
}) => {

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
    <div className='py-12 flex flex-col'>

      <div className='flex flex-row justify-center items-center gap-1'>
        <FaLanguage className='w-[20px] h-auto'/> 
        <p className='font-light'>
          {switchLanguage}{' '}
        </p>
      </div>

      <div className='w-full flex justify-center items-center gap-2 py-2'>
        <button
          className="text-MainColor font-bold  rounded"
          onClick={addSubdomain}          
          aria-label='Overstappen op Nederlands'
        >
          <Image
            src="/icons/flags/nl.svg"
            alt='flag Netherlands'
            title='Overstappen op Nederlands'
            width={50}
            height={50}            
            className='w-[50px] rounded-xl h-auto 
            hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 opacity-80 hover:opacity-100 hover:shadow-inner 
            '/>
        </button>
        <button
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
        </button>
      </div>
      
    </div>
  )
}

export default LanguageSwitcher