  import Image from 'next/image'
  import hamburgerMenu from '@/public/icons/lp/hamburgerMenu.svg'
  
  const HamburgerMenu = () => (
    <Image 
      src={hamburgerMenu} 
      alt='email icon'
      width={30}
      height={30}
      loading='lazy'
      className="text-primary" 
    />
  );
  
  export default HamburgerMenu;
  
  