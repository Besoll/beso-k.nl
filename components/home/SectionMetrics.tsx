import dynamic from 'next/dynamic'
import { ctaButtonTitles, secMetricsStepsMain } from "@/data";
import { StepsWithoutNumeric } from "@/components/ui/StepsWithoutNumeric";
const Image = dynamic(() => import('next/image'))
const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'))

const HeroImageSection = dynamic(() => import('@/components/home/HeroImageSection'))
const Tag = dynamic(() => import('@/components/global/Tag'))  

const SectionMetrics = ({ 
        speedItems, 
} : {
    speedItems: {
        tag: string;
        title: string;
        titleStrong: string;
        text1: string;
        text1Title: string;
        text2: string;
        text2Title: string;
        text3: string;
        text3Title: string;
        text4: string;
        text4Title: string;
        subtitle: string;
        title2: string;
        subtitle2: string;
        text5: string;
        image1lg: string;
        image1md: string;
        image1sm: string;
        image2lg: string;
        image2md: string;
        image2sm: string;
        alt1: string;
        alt2: string;
    }

}) => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
        <div className='w-full flex flex-col justify-center items-center py-20 bg-cean/10 text-black sm:px-8 xl:px-4 px-4 gap-4 md:gap-8 xl:gap-12'>
            <div className='relative max-w-7xl w-full flex justify-center md:justify-between flex-col-reverse md:flex-row-reverse gap-4 md:gap-8 items-center'>
                <div className='w-full md:max-w-md xl:max-w-3xl flex flex-col items-center md:justify-start md:items-start gap-4 max-lg:mt-10'>
                    <Tag title={speedItems.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>
                    <h2 className='heading md:text-left'>
                        {speedItems.title} {' '} <br></br>
                        <span className='text-MainBG'> {speedItems.titleStrong}</span>
                    </h2> 
                    <p className="text-md lg:text-base text-normal text-center md:text-left md:mt-0 z-12 flex ">            {speedItems.subtitle}
                    </p>
                    <div className="w-full flex flex-col items-center justify-start gap-4 px-4 py-12 md:px-2 md:py-2 md:items-start ">
                        <p className="">
                            <span className="font-bold">{speedItems.text1Title}</span> 
                            {' '}{speedItems.text1}
                        </p>
                    
                        <p className="">
                            <span className="font-bold">{speedItems.text2Title}</span> 
                            {' '}{speedItems.text2}
                        </p>
                        <p className="">
                            <span className="font-bold">{speedItems.text3Title}</span> 
                            {' '}{speedItems.text3}
                        </p>
                        <p className="">
                            <span className="font-bold">{speedItems.text4Title}</span> 
                            {' '}{speedItems.text4}
                        </p>

                        <p className="font-bold pt-2 -mb-4">
                            {speedItems.title2}
                        </p>
                        <p className="">
                            {speedItems.subtitle2}
                        </p>
                    </div>                 
                </div>
                <div className='w-full h-auto flex justify-center md:justify-end items-center md:items-end -mt-10 md:mt-0 mb-8 md:mb-0'>
                    <HeroImageSection 
                        image1lg={speedItems.image1lg}
                        image1md={speedItems.image1md}  
                        image1sm={speedItems.image1sm}
                        image2lg={speedItems.image2lg}
                        image2md={speedItems.image2md}  
                        image2sm={speedItems.image2sm}
                        alt1={speedItems.alt1} 
                        alt2={speedItems.alt2}
                    />
                </div>   
            </div>

            <div className="max-w-7xl w-full h-full flex justify-center flex-col md:flex-row md:flex-wrap gap-4 items-stretch mt-2 md:mt-16 z-10">
                <StepsWithoutNumeric steps={secMetricsStepsMain} otherClasses="bg-white md:max-w-72" />    
            </div>
            <p className="text-lg text-left md:-mb-8 w-full max-w-7xl px-4 ">{speedItems.text5}</p>

            <CtaButton ctaButtonTitles={ctaButtonTitles[1]}/>

        </div>
    </div>
  )
}

export default SectionMetrics