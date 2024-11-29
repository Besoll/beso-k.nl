import Link from 'next/link'
import { FooterItemsPages, FooterItemsTerms } from './footerItems'
import {  footerItemsTerms, getFooterSectionTitles, navItemsStatic } from '@/data'
import dynamic from 'next/dynamic'
import Slider from './FooterSlider'


// Helper function to format the current date
const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {      
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-EN', options);
    };


const Footer = () => {
    const { copyright1, copyright2 } = getFooterSectionTitles;
    const currentDateFooter = getCurrentDate();

  return (
    <footer className="w-full max-w-full overflow-hidden flex flex-col justify-center items-center shadow-lg bg-black text-gray-300 text-md md:text-base px-2 sm:px-4 py-16 md:py-20  text-center" >

        <div className="max-w-7xl flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-32 py-4 text-center">           
            <div className='w-full flex flex-col lg:flex-row flex-wrap'>                
                    <ul className='w-full flex flex-col md:flex-row  text-center gap-2 flex-1'>
                        <FooterItemsPages footerItemsPages={navItemsStatic} />
                    </ul>                    
            </div>                        
        </div>
        
        
        <Slider />       

        <hr className="my-6 border-black-400 sm:mx-auto lg:my-8" />
        
        <div className="flex justify-center text-center  pb-6 flex-col">
            <div className='w-full flex flex-col lg:flex-row flex-wrap'>
                    <ul className='w-full flex flex-row text-center gap-2 flex-1'>
                        <FooterItemsTerms footerItemsTerms={footerItemsTerms} />                 
                    </ul> 
            </div> 
            <hr className="w-full my-2 border-black-400 md:mx-auto"/>
            <div className='text-xs'>
                    {copyright1} {copyright2} - {' '}
                    <span className='capitalize'>
                        {currentDateFooter}
                    </span>
            </div>
        </div>       
    </footer>
  )
}

export default Footer