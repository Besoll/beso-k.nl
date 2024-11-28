import Image from 'next/image'
import flagNL from '@/public/icons/flags/nl.svg'

const FlagNL = () => (
  <Image 
    src={flagNL} 
    alt='Flag NL'
    title='Switch to Dutch'
    sizes="50px"
    className='w-[50px] rounded-xl h-auto 
            hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 opacity-55 hover:opacity-100 border ring-offset-2 border-color-MainColor shadow-inner hover:animate-spin'
  />
);

export default FlagNL;
