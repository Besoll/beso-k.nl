
import { sectionDeal,  } from '@/data'
import dynamic from 'next/dynamic'
const SectionDeal = dynamic(() => import("@/components/home/SectionDeal"))
const GetDeal = dynamic(() => import("@/components/getDeal/GetDeal"))
const FAQ = dynamic(() => import("@/components/getDeal/FAQ"))


const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center bg-MainBG text-black 
                    snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>     
      
      <section className='mt-28 py-8'>
        <GetDeal />
      </section>

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-MainColor pt-16 md:pt-32' id='deal' >
          <SectionDeal i={sectionDeal[1]} /> 
      </section>  

      <section className='mt-28 py-8' id='proposal'>
        <FAQ />      
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-MainColor pt-16 pb-16 md:pb-0 md:pt-32' >
          <SectionDeal i={sectionDeal[0]} /> 
      </section>

      

    </main>
  )
}

export default page