import Image from 'next/image'
import quotationMark from '@/public/icons/lp/quotationMark.svg'

const QuotationMark = () => (
  <Image 
    src={quotationMark} 
    alt='arrow icon'
    sizes="100px"
    className='w-[100px] h-auto'
  />
);

export default QuotationMark;
