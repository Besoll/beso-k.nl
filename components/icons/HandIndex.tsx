import Image from 'next/image'
import handIndex from '@/public/icons/handIndex.svg'

const HandIndex = () => (
  <Image 
    src={handIndex} 
    alt="Hand Index clicking icon" 
    width={20} 
    height={20}
    loading='lazy'
    className='w-1/3 h-auto pr-2'
  />
);

export default HandIndex;