"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import dynamic from 'next/dynamic'
const DownloadCV = dynamic(() => import('@/components/global/DownloadCV'))
const HamburgerMenu = dynamic(() => import('@/components/icons/HamburgerMenu'))
const HamburgerMenuOpen = dynamic(() => import('@/components/icons/HamburgerMenuOpen'))
const NavigationStaticMobile = dynamic(() => import('@/components/global/NavigationStaticMobile'))

const NavigationStatic = ({
    navItemsStatic, navButtonTitle, downloadPasswordForCV
}:{
    navItemsStatic: {
        id: number;
        name: string;
        link: string;
        ariaLabel: string;
    } [];
    navButtonTitle: string;
    downloadPasswordForCV: string;
}) => {

    const [nav, setNav] = useState(false);




  return (
    <nav className='w-full flex justify-center items-center h-16 md:h-20 text-primary bg-MainBG/65 shadow-lg fixed nav z-[1500] reference'>
        <div className="w-full max-w-7xl flex justify-between items-center px-4">
            
            
            <div className="flex flex-row gap-2 md:gap-4 h-full items-center justify-center ">

                <Link 
                    href='/#hero'
                    className="h-full flex justify-center items-center gap-1 flex-row"
                >
                    <Image
                        src="/me.webp"
                        alt="Beso Kavzharadze"
                        width={60}
                        height={60}
                        className="rounded-full shadow-lg w-auto h-1/2 md:h-full transition duration-300 ease-in-out cursor-pointer hover:scale-110 hover:skew-y-1 hover:rotate-1"
                    />
                    <p className="text-owlGreen-100 font-bold text-xl md:text-4xl transition duration-300 ease-in-out cursor-pointer hover:scale-110 hover:skew-y-1 hover:rotate-1 hover:text-white">
                        BESO
                    </p>

                </Link>
                <Link 
                    href='/#websummit'
                    aria-label='navigate to websummit' 
                    className='h-12'
                    >
                    <Image 
                        src='/websummit/WS24.webp'
                        alt='logo websummit'
                        width={1000}
                        height={500}
                        className='h-1/2 md:h-full w-auto md:flex hidden
                                transition duration-300 ease-in-out cursor-pointer 
                                hover:scale-110 hover:skew-y-1 hover:rotate-1'
                    />
                </Link>
                <DownloadCV downloadPasswordForCV={downloadPasswordForCV}  otherClasses={'px-2 py-2 md:px-2 xl:px-8 md:py-4 border-1 md:border-2 border-owlGreen-600 text-white text-sm md:text-md xl:text-lg text-center rounded-full shadow-lg hover:bg-white hover:text-owlGreen-600 transition-all duration-300 '}/>
            </div>
            <ul className="hidden lg:flex lg:justify-center lg:items-center">
                {navItemsStatic.map((i) => (  
                    <li
                        key={i.id}
                        className="nav-links mx-[0.63rem] cursor-pointer capitalize text-base font-bold hover:outline outline-1 outline-offset-1 rounded-md px-1 py-1 hover:scale-105 text-MainColor hover:text-neutral-100 outline-neutral-100 duration-300 link-underline
                        "
                    >
                        <Link 
                            href={i.link} 
                            aria-label={i.ariaLabel}
                        >
                            {i.name}
                        </Link>
                    </li>
                ))}

                <li
                    className="nav-links mx-[0.63rem] cursor-pointer capitalize text-base font-bold hover:outline outline-1 outline-offset-1 rounded-md px-1 py-1 hover:scale-105 text-MainColor hover:text-neutral-100 outline-neutral-100 duration-300 link-underline"
                >
                </li>
            </ul>
            

            <div onClick={() => setNav(!nav)}>
                {nav && (
                    <NavigationStaticMobile navItemsStatic={navItemsStatic} navButtonTitle={navButtonTitle}/>
                )}

            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 lg:hidden"
            >
                {nav ? 
                <HamburgerMenuOpen />  
                : 
                <HamburgerMenu />  
                }
            </div>


        </div>
    </nav>
  )
}

export default NavigationStatic

