'use client'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Image = dynamic(() => import('next/image'));
const Tag = dynamic(() => import('@/components/global/Tag'));

const StatisticsCards = ({
  statisticSection, statisticsItems
} : {
  statisticsItems: {
    id: number;
    stat: string;
    stat2?: string;
    label: string;
    description: string;
    image: string;
    alt: string;
  }[];
  statisticSection: {
    tag: string;
    title: string;
    subtitle: string;
  };
}) => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center px-4 gap-4 text-white'>
      <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6'>  
        <Tag title={statisticSection.tag} otherClass="text-white font-bold" icon="tagLine.svg" />          
        <h2 className='heading text-center '>
          {statisticSection.title}
        </h2>

        <p className='text-center '>
          {statisticSection.subtitle}
        </p> 
      </div> 
      <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center 
      px-4 md:px-8 gap-4'>

        {statisticsItems.map((i) => (
          <motion.div
            key={i.id}
            className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-row justify-start items-center pl-0 gap-4 pr-4 py-4 bg-white rounded-xl shadow-md text-black
            hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:rotate-2 hover:shadow-2xl'
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0], transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' } }}
          >
            <motion.div
              className='flex justify-center items-center px-4 py-3 bg-MainBG rounded-r-xl'
              animate={{ y: [0, -10, 0], rotate: [0, 5, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <Image 
                src={i.image} 
                alt={i.alt}
                width={25}
                height={25}
                loading='lazy'
                className='w-[250px] h-auto transition-transform duration-300 ease-in-out hover:rotate-2 hover:scale-110'
              />
            </motion.div>
            <motion.div
              className='text-left'
              animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <h2 className='text-3xl font-semibold'>
                <motion.span
                  animate={{ color: ['#90a023', '#000000',   '#90a023'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {i.stat}
                </motion.span>
                <span className='font-extrabold'>+</span>{' '} {i.stat2}
              </h2>
              <h2 className='text-xl font-bold py-2'>
                {i.label}
              </h2>
              <p className='text-base'>
                {i.description}
              </p>
            </motion.div>
          </motion.div>             
        ))}
        
      </div>
    </div>
  );
};

export default StatisticsCards;
