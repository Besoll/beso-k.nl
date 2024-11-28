import Image from 'next/image'
import email from '@/public/icons/email.svg'

const EmailIcon = () => (
  <Image 
    src={email} 
    alt='email icon'
    width={12}
    height={12}
    loading='lazy'
  />
);

export default EmailIcon;

