import Image from 'next/image'
import dynamic from 'next/dynamic'
const BgAnim = dynamic(() => import('@/components/global/lotties/BgAnim'))

const HeroImageSection = ({
    image1lg, image1md, image1sm, image2lg, image2md, image2sm, alt1, alt2
} : {
    image1lg: string,
    image1md: string,  
    image1sm: string,
    image2lg: string,
    image2md: string,  
    image2sm: string,
    alt1: string, 
    alt2: string,
}) => {
  return (
    <div className='w-full h-full flex object-cover relative'>
            <div className='w-full h-full text-MainBG outline outline-2 absolute bottom-2 md:bottom-6 right-2 md:right-6 z-0 rounded-xl' />
            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src={image1lg}
                alt={alt1}
                width={1758}
                height={1758}
                className="w-full h-auto   rounded-xl
                hover:scale-105  transition duration-300 ease-in-out 
                cursor-pointer hover:rotate-1 shadow-xl
                lg:flex hidden md:min-h-[700px] object-cover z-10"
            />
            <Image 
                src={image1md}
                alt={alt1}
                width={1200}
                height={1200}
                className="h-full 
                hover:scale-105  transition duration-300 ease-in-out 
                cursor-pointer hover:rotate-1 shadow-xl
                lg:hidden hidden md:flex z-10  rounded-xl"
            />
            <Image 
                src={image1sm}
                alt={alt1}
                width={800}
                height={800}
                className="object-cover h-auto w-full shadow-lg   rounded-xl
                hover:scale-105  transition duration-300 ease-in-out 
                cursor-pointer hover:rotate-1
                flex md:hidden z-10"
            />

            <div className='w-full h-auto absolute bottom-32 right-2 object-cover z-10'>
                <BgAnim />
            </div>

            


            <Image 
                src={image2lg}
                alt={alt2}
                width={800}
                height={623}
                className="w-[45%] h-auto absolute -bottom-32 -left-2
                hover:scale-105  transition duration-300 ease-in-out 
                cursor-pointer hover:rotate-1
                lg:flex hidden object-cover z-10"
            />
            <Image 
                src={image2md}
                alt={alt2}
                width={800}
                height={623}
                className="w-[45%] h-auto absolute -bottom-32 -left-2 
                hover:scale-105  transition duration-300 ease-in-out 
                cursor-pointer hover:rotate-1
                lg:hidden hidden md:flex z-10"
            />
            <Image 
                src={image2sm}
                alt={alt2}
                width={800}
                height={623}
                className="object-cover w-[45%] h-auto absolute -bottom-16 left-0 md:-left-10 
                flex md:hidden z-10
                hover:scale-105  transition duration-300 ease-in-out 
                cursor-pointer hover:rotate-1"
            />
    </div>

  )
}

export default HeroImageSection




