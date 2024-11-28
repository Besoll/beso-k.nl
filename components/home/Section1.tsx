import Image from 'next/image'

import dynamic from 'next/dynamic'
import { ctaButtonTitles, whyHireMeItems } from '@/data'
import TechStack from '../global/lotties/TechStack'
const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'))
const Tag = dynamic(() => import('@/components/global/Tag'))
const SectionHand = dynamic(() => import('@/components/global/SectionHand'))



const Section1 = ({
    homeSection1,
} : {
        homeSection1: {
            tag1: string,
            tag2: string,
            title1: string,
            pText1: string,
            pText2?: string,
            pText3?: string,
            pText4?: string,
            pText5Strong: string,
            pText5: string,
            title2: string,
            pTextNextStart: string,
            pTextNextEnd: string,
            image1: string,
            alt1: string,
            imageIcon: string,
            imageAlt: string,
        };
}) => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-16 md:gap-20 px-4 md:px-8 mb-16 md:mb-4'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='w-full md:min-w-[300px] lg:min-w-[450px] h-auto
            flex flex-col justify-center items-center ml-4 mb-2'>

                {/* <div className='w-full h-full bg-qoqu_Dark_Grey rounded-xl absolute top-4 right-4 z-0' /> */}
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src={homeSection1.image1}
                    alt={homeSection1.alt1}
                    width={1500}
                    height={957}
                    className="object-cover h-auto w-full rounded-xl z-10
                               hover:scale-110  transition duration-300 ease-in-out 
                                cursor-pointer hover:rotate-2 shadow-md hover:shadow-xl flex
                                "
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 
                <Tag title={homeSection1.tag1} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    {homeSection1.title1}
                </h2> 
                <p className=' md:text-left text-center'>
                    {homeSection1.pText1}
                </p> 
                <p className=' md:text-left text-center'>
                    {homeSection1.pText2}
                </p>
                <p className=' md:text-left text-center'>
                    {homeSection1.pText3}
                </p> 
                <p className=' md:text-left text-center'>
                    {homeSection1.pText4}
                </p>
                <p className=' md:text-left text-center -mb-4'>
                    <strong>{homeSection1.pText5Strong}</strong>
                </p> 
                <p className=' md:text-left text-center'>
                    {homeSection1.pText5}
                </p>
            </div> 
        </div>  
        <div className='w-full h-auto flex flex-col-reverse md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'>
                <Tag title={homeSection1.tag2} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>
                <h2 className='heading font-bold md:text-left '>{homeSection1.title2}</h2>
                <p className='md:text-left text-center '>
                    {homeSection1.pTextNextStart} 
                </p>
                <SectionHand 
                    whyChooseUsItems={whyHireMeItems} 
                    image={homeSection1.imageIcon} 
                    alt={homeSection1.imageAlt}
                />
                <CtaButton ctaButtonTitles={ctaButtonTitles[1]}/>
            </div>
            <TechStack />
        </div>
    </div>
  )
}

export default Section1