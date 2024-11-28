import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))

const SectionHand = ({
    whyChooseUsItems, image, alt
   } : {
        whyChooseUsItems: {
            id: number,
            title: string,
            description: string,
        } [];
        image: string,
        alt: string,
    }) => {
  return (

    <div className='w-full h-auto flex flex-col gap-4'>
        {whyChooseUsItems.map((item) => (
            <div key={item.id} className='flex flex-row gap-4 justify-start items-start'>
                <Image 
                    src={image} 
                    alt={alt}
                    width={25}
                    height={25}
                    loading='lazy'
                    className='w-[25px] h-auto'
                />
                <div className='flex flex-col justify-start items-start gap-1'>
                    <p className='text-black font-bold text-xl'>
                        {item.title} 
                    </p>                    
                    <p className='text-sm text-left'>
                        {item.description}
                    </p>                    
                </div>
            </div>
        ))}
    </div>
  )
}

export default SectionHand