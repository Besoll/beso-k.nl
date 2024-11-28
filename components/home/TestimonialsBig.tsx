import { ctaButtonTitles, testimonialsItems } from '@/data'
import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/global/Tag'))
const SwiperBig = dynamic(() => import("@/components/ui/SwiperBig"))
const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'))


const TestimonialsBig = ({
  testimonialBig } : {
    testimonialBig: {
      tag: string;
      title: string;
      subtitle: string;
      imageCover: string;
      imageCoverAlt: string;
    }
  }
) => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-4 py-16 md:py-32 '>  
      <Tag title={testimonialBig.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>    
      <h2 className='w-full heading text-center'>
        {testimonialBig.title}
      </h2>
      <p className='text-xl text-center pb-8 md:pb-16'>
          {testimonialBig.subtitle}
      </p>
      <SwiperBig 
        testimonialsItems={testimonialsItems} 
        imageCover={testimonialBig.imageCover} 
        imageCoverAlt={testimonialBig.imageCoverAlt} 
      />
      <CtaButton ctaButtonTitles={ctaButtonTitles[1]}/>     
    </div>
  )
}

export default TestimonialsBig