import { ctaButtonTitles } from '@/data'
import dynamic from 'next/dynamic'
const Image = dynamic(() => import("next/image"))
const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'))
const Tag = dynamic(() => import('@/components/global/Tag'))


const SectionServices = ({
  sectionServices, serviceItems, 
} : {
  sectionServices: {
      tag: string,
      title: string,
      subtitle: string,      
  },
  serviceItems: {
    id: number,
    title: string,
    description: string,
  } [];
}) => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-8  px-4 md:px-8'>
        <div className='w-fit h-auto flex flex-col justify-center items-center gap-4'>
            
            <Tag title={sectionServices.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>           
            <h2 className='w-full heading  text-center line-clamp-4'>
                {sectionServices.title}
            </h2>
            <p className='text-xl text-center mb-4 font-bold'>
              {sectionServices.subtitle}
            </p>
        </div>

        {serviceItems.map((i, index) => (
          <div key={i.id} className={`w-full h-auto flex flex-col bg-MainBG/5 px-4 py-6 rounded-lg hover:rounded-xl
            hover:rotate-1 hover:scale-105 transition ease-out cursor-pointer
            ${index % 2 === 0 ? ' text-left ' : ' text-right '}
          gap-4 md:gap-20 justify-center items-center`}>
              <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>                   
                  <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold md:text-left text-center'>
                    {i.title}
                  </h2> 
                  <p className='md:text-left text-center  '>
                      {i.description}
                  </p>

              </div> 
          </div> 
        ))}
        
        <CtaButton ctaButtonTitles={ctaButtonTitles[1]}/>
        
    </div>
  )
}

export default SectionServices

