  import Image from 'next/image'
  import hamburgerMenuOpen from '@/public/icons/lp/hamburgerMenuOpen.svg'
  
  const HamburgerMenuOpen = () => (
    <Image 
      src={hamburgerMenuOpen} 
      alt='email icon'
      width={30}
      height={30}
      loading='lazy'
      className="text-primary" 
    />
  );
  
  export default HamburgerMenuOpen;
  
  
