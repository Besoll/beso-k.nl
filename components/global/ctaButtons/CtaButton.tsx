import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton = ({
  ctaButtonTitles,
  onMouseEnter,
  onMouseLeave,
} : {
  ctaButtonTitles: {
    title:string, 
    ariaLabel: string,};
    onMouseEnter?: () => void; // Add these lines
    onMouseLeave?: () => void;  // Add these lines
  
}) => {
  return (
    <Button 
    
      asChild 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className='bg-MainBG/90 hover:bg-MainBG rounded-xl text-white shadow-xl px-16 py-8 text-2xl hover:scale-105 transition duration-300 ease-in-out max-w-full'
    >
        <Link href="/#contact-us" aria-label={ctaButtonTitles.ariaLabel} className="text-xl md:text-2xl font-semibold" >
          {ctaButtonTitles.title}
        </Link>
    </Button>
  )
}

export default ctaButton

