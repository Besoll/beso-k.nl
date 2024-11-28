
import Link from "next/link";
import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image')) 

const Logo = ({
  otherClass, src } : {
    otherClass?: string;
    src: string;
}) => {
  return (
    <Link 
      href='/' 
      aria-label='navigate homepage' 
      className={` ${otherClass}`}
    >
      <Image 
        src={src}
        alt='logo'
        width={1639}
        height={491}
        className='h-full w-auto
                  transition duration-300 ease-in-out cursor-pointer 
                  hover:scale-110 hover:skew-y-1 hover:rotate-1'
      />
    </Link>
  )
}

export default Logo





