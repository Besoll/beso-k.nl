import Link from 'next/link'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const EmailIcon = dynamic(() => import('@/components/icons/EmailIcon'))
const MobileIcon = dynamic(() => import('@/components/icons/MobileIcon'))
const MapLocation = dynamic(() => import('@/components/icons/MapLocation'))
// const IframeComponent = dynamic(() => import('@/components/ui/IframeProps'))


export const FooterItemsPages = ({
    footerItemsPages,
    } : {
        footerItemsPages: {
            id: number,
            name: string,
            link: string,
            ariaLabel: string,
        } [];
    }) => {
  return (
    <>
        {footerItemsPages.map((item) => (
            <li key={item.id} className='my-2 px-2 md:px-0'>
                <Link 
                    href={item.link}
                    aria-label={item.ariaLabel}
                    className='nav-links cursor-pointer capitalize md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                >
                    {item.name}                     
                </Link>
            </li>
        ))}
    </>
  )
}

export const FooterItemsTerms = ({
    footerItemsTerms,
    } : {
        footerItemsTerms: {
            id: number,
            name: string,
            link: string,
            ariaLabel: string,
        } [];
    }) => {
  return (
    <>
        {footerItemsTerms.map((item) => (
            <li key={item.id} className='my-2 px-2'>
                <Link 
                    href={item.link}
                    aria-label={item.ariaLabel}
                    className='nav-links cursor-pointer capitalize md:hover:scale-105 md:hover:text-owlOrange md:duration-300'
                >
                    {item.name}                     
                </Link>
            </li>
        ))}
    </>
  )
}

export const FooterItemsIcons = ({
    footerItemsIcons,
   } : {
        footerItemsIcons: {
            id: number,
            icon: string,
            name: string,
        } [];
    }) => {
  return (
    <>
        {footerItemsIcons.map((item) => (
            <div key={item.id} className='mb-2'>
                {item.id === 1 ? (
                    <Image 
                        src={item.icon}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"                                  
                    /> 
                ) : (
                    <Image 
                        src={item.icon}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"                                  
                    /> 
                    // <IframeComponent
                    //     src={item.icon}
                    //     width="160"
                    //     height="120"
                    //     title={item.name}
                    // />
                )}
            </div>    
        ))}
    </>
  )
}

export const FooterItemsCredentials = ({
    footerItemsCredentials,
    } : {
        footerItemsCredentials: {
            id: number,
            icon: string,
            name: string,
            link?: string,
            ariaLabel: string,
        }[];
    }) => {
  return (
    <>
        <div className='w-full flex flex-col sm:flex-row justify-center text-center gap-4'>
            {footerItemsCredentials.slice(0, 2).map((item) => (
                <div key={item.id} className='w-full flex justify-center items-center flex-row gap-2'>
                    <Link href={item.link || '#'} aria-label={item.ariaLabel} className='w-full flex justify-center items-center hover:scale-105 hover:text-owlOrange duration-300'>
                        {item.icon === 'mobile' && <MobileIcon />}
                        {item.icon === 'email' && <EmailIcon />}
                        <span className="ml-1 sm:ml-2">{item.name}</span>
                    </Link>
                </div>
            ))}
        </div>
        {footerItemsCredentials.length > 2 && (
            <div className='w-full flex justify-center items-center flex-row gap-2'>
                {footerItemsCredentials.slice(2).map((item) => (
                    <div key={item.id} className='w-full flex justify-center items-center'>
                        <Link 
                            href={item.link || '#'}
                            aria-label={item.ariaLabel} 
                            target='_blank'
                            className='flex justify-center items-center hover:scale-105 hover:text-owlOrange duration-300'
                        >
                            {item.icon === 'map' && <MapLocation />}
                            <span className="ml-1 sm:ml-2">{item.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}