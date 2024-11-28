import Image from 'next/image'
import arrowGreen from '@/public/icons/lp/arrowWhite.svg'

const SwiperButtonNext = () => (
      <Image 
        src={arrowGreen} 
        alt='arrow icon'
        width={30}
        height={20}
        loading='lazy'
        className='ml-2'
    />
  );
  
  export default SwiperButtonNext;