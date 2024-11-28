import Image from 'next/image'
import arrowDrawing from '@/public/icons/lp/arrowDrawing.svg'

const ArrowDrawing = () => (
  <Image 
    src={arrowDrawing} 
    alt='arrow icon drawing'
    width={25}
    height={25}
    loading='lazy'
    className='w-[150px] h-auto rotate-45 scale-y-[-1]'
  />
);

export default ArrowDrawing;
