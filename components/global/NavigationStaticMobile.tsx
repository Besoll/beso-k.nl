"use client"

import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const LanguageSwitcherNav = dynamic(() => import('@/components/ui/LanguageSwitcherNav'))

const NavigationStaticMobile = ({
    navItemsStatic, navButtonTitle,
}:{
    navItemsStatic: {
        id: number;
        name: string;
        link: string;
        ariaLabel: string;
    } [];
    navButtonTitle: string,
}) => {

    const [nav, setNav] = useState(false);

    
  return (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                        bg-black/90 text-neutral-300">
            {navItemsStatic.map((navItem: any) => (  
                <li
                    key={navItem.id}
                    className="px-4 cursor-pointer capitalize py-6 text-xl"
                >
                    <Link 
                        onClick={() => setNav(!nav)} 
                        href={navItem.link} 
                        aria-label={navItem.ariaLabel}
                        >
                        {navItem.name}
                    </Link>
                </li>
            ))}


            {/* <li
                className="px-4 cursor-pointer capitalize py-6 text-xl flex flex-row gap-1"
            > */}
                {/* <FaGlobe /> Dutch  */}

                {/* <LanguageSwitcherNav /> */}
                    
            {/* </li> */}


            
            <li className="mt-5 md:mt-10">                
                {/* <Link onClick={() => setNav(!nav)} href="#contact-us" className="shadow-xl py-4 hover:scale-105 transition duration-300 ease-in-out"  aria-label="navigate form section">
                    <MagicButton 
                        title={navButtonTitle}
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClassesButton="border-none bg-MaingBG"
                        otherClasses="bg-MaingBG/50"
                    />
                </Link> */}

                {/* <Link onClick={() => setNav(!nav)} href="/" className="flex h-12 w-auto mt-4 py-8 pl-2" aria-label="navigate main page">
                    <Logo otherClass="h-12" src='../logo/logo-white.svg'/>
                </Link>   */}
            
                <div className="flex flex-col gap-2 h-12 justify-center items-center mt-2">
                    <Link onClick={() => setNav(!nav)} href="/#hero" className="flex h-12 w-auto mt-4 py-8 pl-2 justify-center items-center gap-1 flex-row" aria-label="navigate main page">
                    
                        <Image
                            src="/me.webp"
                            alt="Beso Kavzharadze"
                            width={60}
                            height={60}
                            className="rounded-full shadow-lg w-auto h-full transition duration-300 ease-in-out cursor-pointer hover:scale-110 hover:skew-y-1 hover:rotate-1"
                        />
                        <p className="text-owlGreen-100 font-bold text-4xl transition duration-300 ease-in-out cursor-pointer hover:scale-110 hover:skew-y-1 hover:rotate-1 hover:text-white">
                            BESO
                        </p>
                    </Link>  
                    <Link
                        href="/Beso_Kavzharadze_CV.pdf"
                        aria-label="download CV"
                        className="px-2 py-2 md:px-2 xl:px-8 md:py-4 border-1 md:border-2 border-owlGreen-600 text-white text-sm md:text-md xl:text-lg text-center rounded-full shadow-lg hover:bg-white hover:text-owlGreen-600 transition-all duration-300"
                    >
                        Download CV
                    </Link>
                </div>
            </li>

        </ul>
  )
}

export default NavigationStaticMobile