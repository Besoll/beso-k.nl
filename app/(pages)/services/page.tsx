
import { sectionDeal,  } from '@/data'
import dynamic from 'next/dynamic'
const SectionDeal = dynamic(() => import("@/components/home/SectionDeal"))

const Services = dynamic(() => import("@/components/services/Services"))
const Proposal = dynamic(() => import("@/components/services/Proposal"))
import Pricing from '@/components/home/Pricing'

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center bg-MainBG text-black 
                    snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>     
      
      <section className='mt-28 py-8'>
        <Services />
      </section>

      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 bg-MainBG text-black' id='pricing' >
          <Pricing  />
      </section> 

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-MainColor pt-16 md:pt-32' id='deal' >
          <SectionDeal i={sectionDeal[1]} /> 
      </section>  

      <section className='mt-28 py-8' id='proposal'>
        <Proposal />      
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-MainColor pt-16 pb-16 md:pb-0 md:pt-32' >
          <SectionDeal i={sectionDeal[0]} /> 
      </section>

      

    </main>
  )
}

export default page