import { ctaButtonTitles } from '@/data'
import dynamic from 'next/dynamic'
const Image = dynamic(() => import("next/image"))
const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'))
const Tag = dynamic(() => import('@/components/global/Tag'))


const Section2 = ({
  howItWorks, howItWorksItems, 
} : {
  howItWorks: {
      tag: string,
      title: string,     
  },
  howItWorksItems: {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    image: string,
  } [];
}) => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-28 px-4 md:px-8'>
        <div className='w-fit h-auto flex flex-col justify-center items-center gap-4'>
            
            <Tag title={howItWorks.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg"/>           
            <h2 className='w-full heading  text-center line-clamp-4'>
                {howItWorks.title}
            </h2>
        </div>

        {howItWorksItems.map((i, index) => (
          <div key={i.id} className={`w-full h-auto flex flex-col mb-12 md:mb-0
            ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
          gap-4 md:gap-20 justify-center items-center`}>
              <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
              lg:min-w-[450px]'>
                  <Image 
                      src={i.image}
                      alt={i.title}
                      width={1456}
                      height={816}
                      className="w-full h-auto rounded-lg flex hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
                  />                  
              </div>
              <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                  <Tag title={i.subtitle} otherClass="text-MainBG font-light" icon="tagLineBlue.svg"/>       
                  <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold md:text-left text-center'>
                    <span className='text-5xl'>{i.id}</span>{'. '}{i.title}
                  </h2> 
                  <p className='md:text-left text-center  pb-2 md:pb-8'>
                      {i.description}
                  </p>

              </div> 
          </div> 
        ))}
        
        <CtaButton ctaButtonTitles={ctaButtonTitles[1]}/>
        
    </div>
  )
}

export default Section2

