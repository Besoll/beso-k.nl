import Image from 'next/image'
import flagGB from '@/public/icons/flags/gb.svg'

const QuotationMark = () => (
  <Image 
    src={flagGB} 
    alt='Flag GB'
    title='Switch to English'
    sizes="50px"
    className='w-[50px] rounded-xl h-auto 
            hover:scale-110 hover:skew-y-1 transition duration-300 ease-in-out cursor-pointer hover:rotate-1  opacity-80 hover:shadow-inner'
  />
);

export default QuotationMark;
