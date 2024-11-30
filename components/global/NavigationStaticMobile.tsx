"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
            <li className="mt-5 md:mt-10">
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
                </div>
            </li>

        </ul>
  )
}

export default NavigationStaticMobile