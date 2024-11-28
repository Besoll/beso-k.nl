"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import dynamic from 'next/dynamic'
const QuotationMark = dynamic(() => import("@/components/icons/lp/QuotationMark"))
const SwiperButtonNext = dynamic(() => import("@/components/icons/lp/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/icons/lp/SwiperButtonPrev"))


export default function SwiperSmall({
  testimonialsItems
} : {
  testimonialsItems: {
    id: number,
    name?: string,
    region?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    date?: string,
    image: string, 
    alt: string,
    statuswho: string,
  } [];
})  
{   
    return (
      <div className='w-full md:w-2/4 h-auto flex flex-col justify-center items-center text-black'>

        {/* <style jsx global>{`
            .swiper-pagination-bullet-active {
              background: #90a023;
            }
          `}
        </style> */}
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,          
          // }}
          loop={true}
          
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}

          navigation= {{
            nextEl: ".swiper-button-next-small",
            prevEl: ".swiper-button-prev-small",
          }}
          
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className="flex justify-center items-center text-center w-full h-auto max-w-[1440px] px-4 py-12 md:py-16"
        >
          {testimonialsItems.map((slide) => (
          <SwiperSlide key={slide.id} className='w-full max-w-[400xp] flex flex-col justify-start items-start bg-MainBG/10 px-6 py-6 rounded-xl duration-300 ease-in-out md:cursor-pointer gap-8'>
            <div className='w-full h-auto flex flex-col justify-cener items-start text-start py-4 gap-2 md:gap-4'>
              <div className='w-full h-auto flex flex-row justify-between items-center gap-12'>
                <QuotationMark />
                <div className='w-full h-auto flex flex-col justify-center items-start '>
                  <p className='text-base font-bold'>
                    {slide.name}
                  </p>
                  <p className='text-sm text-black-100/80'>
                    {slide.statuswho}
                  </p>
                  <p className='text-sm text-black-100/80 font-regular'>
                    {slide.date}
                  </p>
                </div>
              </div>


              <p className='text-base'>
                {slide.description}
              </p>
              
                {/* <hr className='w-[90%] h-0.5 rounded-full bg-black/40 my-4'></hr> */}
                <div className='flex flex-col justify-center items-start gap-4'>

                  <div className='w-full h-auto flex flex-row justify-start items-center gap-4'>
                    <Image 
                        src={slide.image} 
                        alt={slide.alt} 
                        width={800} 
                        height={1062} 
                        className='w-[70px] h-auto rounded-full'
                    />
                    <div className='w-full h-auto flex flex-col justify-center items-start '>
                      <p className='text-lg font-semibold'>
                        {slide.title}
                      </p>
                      <p className='text-sm'>
                        {slide.region}
                      </p>
                    </div>                   

                  </div>

                </div> 

            </div>
          </SwiperSlide>
          ))}          
        </Swiper>

        <div className='w-full flex flex-row-reverse justify-center items-center gap-4 mt-4 md:hidden text-qoqu_Green'>
          <div className='swiper-button-next-small bg-MainBG rounded-xl pl-3 pr-5 py-6 text-center shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonNext />
          </div>
          <div className='swiper-button-prev-small bg-MainBG rounded-xl pl-3 pr-5 py-6 text-ceter shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonPrev />
          </div>
        </div>
      
      </div>
  );
};

