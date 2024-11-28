import Image from 'next/image'
import mobile from '@/public/icons/mobile.svg'

const MobileIcon = () => (
    <Image 
        src={mobile} 
        alt='email icon'
        width={12}
        height={12}
        loading='lazy'
        className='text-white'
    />
);

export default MobileIcon;
  
  
