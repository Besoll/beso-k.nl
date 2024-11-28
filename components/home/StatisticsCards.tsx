import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))
const Tag = dynamic(() => import('@/components/global/Tag'))



const StatisticsCards = ({
    statisticSection, statisticsItems } : {
        statisticsItems: {
            id: number
            stat: string,
            stat2?: string,
            label: string,
            description: string,
            image: string,
            alt: string,
        } [];
        statisticSection: {
            tag: string,
            title: string,
            subtitle: string,
        }
}) => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center px-4 gap-4'>
        <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6'>  
            <Tag title={statisticSection.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>          
            <h2 className='heading text-center '>
                {statisticSection.title}
            </h2>

            <p className='text-center '>
                {statisticSection.subtitle}
            </p> 
        </div> 
        <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center 
        px-4 md:px-8 gap-4'>

            {statisticsItems.map((i) => (
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-row justify-start items-center pl-0 gap-4 pr-4 py-4 bg-white rounded-xl shadow-md
                hover:scale-105 transition duration-300 ease-in-out 
                            cursor-pointer hover:rotate-2 hover:shadow-2xl '>
                    <div className='flex justify-center items-center px-4 py-3 bg-MainBG'>
                        <Image 
                            src={i.image} 
                            alt={i.alt}
                            width={25}
                            height={25}
                            loading='lazy'
                            className='w-[250px] h-auto hover:scale-105 transition duration-300 ease-in-out 
                            cursor-pointer hover:rotate-2 hover:shadow-2xl'
                        />
                    </div>
                    <div className='text-left'>
                        <h2 className='text-3xl font-semibold'>
                            {i.stat}<span className=' font-extrabold'>+</span>{' '} {i.stat2}
                        </h2>
                        <h2 className='taxt-xl font-bold py-2'>
                            {i.label}
                        </h2>
                        <p className='taxt-base'>
                            {i.description}
                        </p>
                    </div>
                </div>             

            ))}
            
        </div>
    </div>
  )
}

export default StatisticsCards