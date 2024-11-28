
import { accordionInput, accordionTitle, formItems, heroExtend, heroItems, homeSection1, howItWorks, howItWorksItems, projectItems, sectionDeal, sectionServices, serviceItems, speedItems, statisticSection, statisticsItems, testimonialBig, testimonialSmall,  } from '@/data'
import { LogoCarousel } from '@/components/global/LogoCarousel'
import dynamic from 'next/dynamic'
import AboutMe from '@/components/home/AboutMe'
import Skills from '@/components/home/Skills'
import ProjectsSection from '@/components/home/Projects'
const Hero = dynamic(() => import("@/components/home/Hero"))
const HeroExtend = dynamic(() => import('@/components/home/HeroExtend')) 
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const Section1 = dynamic(() => import("@/components/home/Section1"))
const SectionDeal = dynamic(() => import("@/components/home/SectionDeal"))
const SectionServices = dynamic(() => import("@/components/home/SectionServices"))
const Section2 = dynamic(() => import("@/components/home/Section2"))
const TestimonialsBig = dynamic(() => import("@/components/home/TestimonialsBig"))
const SectionMetrics = dynamic(() => import('@/components/home/SectionMetrics')) 
const RecentProjects = dynamic(() => import('@/components/home/RecentProjects')) 
const TestimonialsSmall = dynamic(() => import("@/components/home/TestimonialsSmall"))
const StatisticsCards = dynamic(() => import("@/components/home/StatisticsCards"))
const Pricing = dynamic(() => import("@/components/home/Pricing"))
const WebSummit = dynamic(() => import("@/components/home/WebSummit"))
const FAQ = dynamic(() => import("@/components/home/FAQ"))


const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center bg-white text-black 
                    snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>      
      <header className='w-full h-auto flex flex-col justify-center items-center pb-8 md:pb-16' id='heroSection'>
          <Hero />
          {/* <HeroExtend  /> */}
          {/* <FormSection formItems={formItems[0]} /> */}
      </header>

      <AboutMe />

      <LogoCarousel />

      <Skills />

      <RecentProjects projectItems={projectItems[0]}/>

      <section className='w-full flex justify-center items-centerflex-col h-auto py-16 md:py-32  text-black' >
        <TestimonialsSmall testimonialSmall={testimonialSmall[0]}/>        
      </section> 

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-black
                          smSP:bg-[url("/veranda/v-4.webp")] mdSP:bg-[url("/veranda/v-4.webp")] lgSP:bg-[url("/veranda/v-4.webp")] bg-no-repeat bg-cover bg-center
                          '>
        <div className='w-full h-auto flex justify-center items-center bg-MainColor/60 py-16 md:py-32 '>
          <StatisticsCards statisticSection={statisticSection[0]} statisticsItems={statisticsItems} /> 
        </div>
      </section>



      

      {/* <section className='w-full h-auto flex justify-center items-center py-16 md:py-32  text-black' id='websummit' >
          <WebSummit  />
      </section> 

      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 bg-MainBG text-black' id='pricing' >
          <Pricing  />
      </section> 

      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='about' >
          <Section1 homeSection1={homeSection1[0]} />
      </section>

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-MainColor pt-16 md:pt-32' id='deal' >
          <SectionDeal i={sectionDeal[1]} /> 
      </section>      
      


      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='services' >
          <SectionServices  sectionServices={sectionServices[0]} serviceItems={serviceItems}/>
      </section>    

      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='howitworks'>
          <Section2  howItWorks={howItWorks[0]} howItWorksItems={howItWorksItems}/>
      </section>

      <section 
        className='w-full flex justify-center items-center flex-col h-auto py-6 text-black' 
        id='testimonials' 
        >
        <TestimonialsBig testimonialBig={testimonialBig[0]}/>        
      </section>


      <SectionMetrics speedItems={speedItems[0]}/>    


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-MainColor pt-16 pb-16 md:pb-0 md:pt-32' >
          <SectionDeal i={sectionDeal[0]} /> 
      </section>

      <RecentProjects projectItems={projectItems[0]}/>




      <section className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row justify-center items-center 
                          gap-8 md:gap-12 py-8 md:py-12     
                          px-4 md:px-6 pb-16 md:pb-32
                          scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='faq'>  
         
        <FAQ accordionTitle={accordionTitle[0]} accordionInput={accordionInput} />
      </section> */}

    </main>
  )
}

export default page