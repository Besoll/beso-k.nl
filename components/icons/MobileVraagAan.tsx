import Image from 'next/image'
import mobileVraagAan from '@/public/icons/MobileVraagAan.svg'

const MobileVraagAan = () => (
  <Image 
    src={mobileVraagAan} 
    alt="Mobile Vraag Aan" 
    width={20} 
    height={20}
    loading='lazy'
    className='w-[50px] h-auto pr-2  bg-magenta rounded-md'
  />
);

export default MobileVraagAan;