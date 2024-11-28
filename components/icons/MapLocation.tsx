  import Image from 'next/image'
  import mapLocation from '@/public/icons/mapLocationWhite.svg'
  
  const MapLocation = () => (
    <Image 
      src={mapLocation} 
      alt='email icon'
      width={12}
      height={12}
      loading='lazy'
    />
  );
  
  export default MapLocation;
  
  
