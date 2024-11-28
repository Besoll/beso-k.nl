import Image from 'next/image'
import chevronDownIcon from '@/public/icons/lp/chevronDownIcon.svg'

const ChevronDownIcon = () => (
  <Image 
    src={chevronDownIcon} 
    alt="Chevron down icon" 
    width={20} 
    height={20} 
    className='h-auto'
  />
);

export default ChevronDownIcon;