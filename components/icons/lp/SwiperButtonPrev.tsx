import Image from 'next/image'
import arrowGreen from '@/public/icons/lp/arrowWhite.svg'

const SwiperButtonPrev = () => (
      <Image 
      src={arrowGreen} 
      alt='arrow icon'
      width={30}
      height={20}
      loading='lazy'
      className='ml-2 rotate-180'
    />
  );
  
  export default SwiperButtonPrev;