"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules'

import dynamic from 'next/dynamic'
const Stars5 = dynamic(() => import("@/components/icons/lp/Stars5"))
const SwiperButtonNext = dynamic(() => import("@/components/icons/lp/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/icons/lp/SwiperButtonPrev"))


  
  export default function SwiperBig({
    testimonialsItems, imageCover, imageCoverAlt
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
    imageCover: string,
    imageCoverAlt: string,
  })  
  {   
    return (
      <div className='w-full h-auto flex flex-col gap-6 md:gap-12 pb-8 md:pb-16'>
        <style jsx global>{`
          .swiper-pagination-bullet-active {
            background: #0f67ae;
          }
        `}
        </style>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,          
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          navigation= {{
            nextEl: ".swiper-button-next-big",
            prevEl: ".swiper-button-prev-big",
          }}
          loop={true}
          
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
          className="flex justify-center items-center text-center w-full max-w-[1440px] px-4 py-12 md:py-16 h-auto "
        >
          {[...testimonialsItems].reverse().map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='w-full flex justify-center items-center relative mb-8 group transition duration-300 ease-in-out md:cursor-pointer'>
              <Image 
                src={slide.image} 
                alt={slide.alt}
                width={800} 
                height={1062} 
                className='flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-xl min-h-[450px]  md:min-h-[300px]'
              />

              <div className="w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto flex justify-center items-center opacity-75 md:opacity-0 md:group-hover:opacity-100 absolute bg-black bg-opacity-50 object-cover rounded-xl transition duration-300 ease-in-out md:cursor-pointer min-h-[450px] md:min-h-[300px]">
                  <Image 
                        src={imageCover}
                        alt={imageCoverAlt}
                        width={800}
                        height={1062}
                        className="w-full h-auto rounded-xl opacity-10"
                    />
                <div className="absolute flex flex-col gap-4 w-full h-fit justify-start items-center px-4 py-2">
                  <Stars5 />
                  <p className="text-white md:text-base">{slide.title}</p>
                  <p className="text-white text-sm md:text-base">{slide.description}</p>
                  <p className="text-white text-xl font-semibold -mt-4 md:-mt-2">{slide.name}</p>
                  <p className="text-white text-sm -mt-4 md:-mt-2">{slide.region}</p>
                  <p className="text-white text-sm -mt-4 md:-mt-2">{slide.date}</p>
                  <p className="text-white text-sm -mt-4 md:-mt-2">{slide.statuswho}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}          
        </Swiper>

        <div className='w-full flex flex-row-reverse justify-center items-center gap-4 mt-4 md:-mt-6'>
          <div className='swiper-button-next-big bg-MainBG rounded-xl pl-3 pr-5 py-6 text-center shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonNext />
          </div>
          <div className='swiper-button-prev-big bg-MainBG rounded-xl pl-3 pr-5 py-6 text-ceter shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonPrev />
          </div>
        </div>
      
      </div>
  );
};

