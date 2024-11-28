import { testimonialsItems } from '@/data'
import dynamic from 'next/dynamic'
const SwiperSmall = dynamic(() => import("@/components/ui/SwiperSmall"))
const Tag = dynamic(() => import('@/components/global/Tag'))
const SwiperButtonNext = dynamic(() => import("@/components/icons/lp/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/icons/lp/SwiperButtonPrev"))


const TestimonialsSmall = ({
  testimonialSmall
} : {
  testimonialSmall: {
    tag: string,
    title: string,
    titleStrong: string,
  }
}) => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center px-4 max-w-[1440px] gap-2 py-12 md:py-16'>

      <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-2'>
        <Tag title={testimonialSmall.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>  
        <h2 className='heading3 md:heading2 font-semibold text-center md:text-left mb-8 text-black'>
          {testimonialSmall.title} <span className='text-MainBG'>{testimonialSmall.titleStrong}</span>
        </h2>

        {/* arrows fot smallswiper */}
        <div className='w-fit hidden md:flex flex-row-reverse justify-center items-center gap-4'>
            <div className='swiper-button-next-small bg-MainBG rounded-xl pl-3 pr-5 py-6 text-center shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
              <SwiperButtonNext />
            </div>
            <div className='swiper-button-prev-small bg-MainBG rounded-xl pl-3 pr-5 py-6 text-ceter shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
              <SwiperButtonPrev />
            </div>
          </div>
      </div>
      <SwiperSmall testimonialsItems={testimonialsItems}/>
    </div>
  )
}

export default TestimonialsSmall