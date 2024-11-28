import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))

const KlantenGuarante = ({
    i, 
} : {
    i: {
        icon1: string;
        name1: string;
        name1Strong: string;
        name2: string;
        icon2: string;
        name3: string;
        name3Strong: string;
        name4: string;
    }    
}) => {
  return (
    <div className='flex flex-row gap-2 justify-center items-center my-2 md:my-4 text-left
                     p-2 md:p-4 rounded-lg'>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <Image 
                                src={i.icon1}
                                alt={i.name1}
                                width={32}
                                height={32}
                                className="w-[30px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                            <div className='flex flex-col'>
                                <div className='text-black text-xs font-medium'>
                                    {i.name1}<span className='font-semibold'>{i.name1Strong}</span>
                                </div>
                                <div className='text-black/70 text-xs '>
                                    {i.name2}
                                </div>
                            </div>
                        </div>
                        <hr className='hidden md:flex rotate-90 w-[15px]'></hr>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <Image 
                                src={i.icon2}
                                alt={i.name3}
                                width={32}
                                height={32}
                                className="w-[55px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                            <div className='flex flex-col'>
                                <div className='text-black text-xs font-medium'>
                                    {i.name3}{' '}<span className='font-semibold'>{i.name3Strong}</span>
                                </div>
                                <div className='text-black/70 text-xs '>
                                    {i.name4}
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default KlantenGuarante