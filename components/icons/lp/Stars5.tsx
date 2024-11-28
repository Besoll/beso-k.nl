import Image from 'next/image'
import stars5 from '@/public/icons/lp/stars5.svg'

const Stars5 = () => (
  <Image 
    src={stars5} 
    alt='arrow icon'
    width={100}
    height={20}
    loading='lazy'
    className='w-[100px] h-auto'
  />
);

export default Stars5;
