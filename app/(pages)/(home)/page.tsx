
import {  formItems, projectItems, statisticSection, statisticsItems, testimonialSmall,  } from '@/data'
import { LogoCarousel } from '@/components/global/LogoCarousel'
import dynamic from 'next/dynamic'
import AboutMe from '@/components/home/AboutMe'
import Skills from '@/components/home/Skills'
import CareerHighlights from '@/components/home/CareerHighlights'
import AchievementsSection from '@/components/home/Achivements'
import EducationAndCertifications from '@/components/home/Education'
import IntroductionSection from '@/components/home/IntroductionSection'
import FormSection from '@/components/home/FormSection'
// import ProjectsSection from '@/components/home/Projects'
const Hero = dynamic(() => import("@/components/home/Hero"))
// const HeroExtend = dynamic(() => import('@/components/home/HeroExtend')) 
// const FormSection = dynamic(() => import('@/components/home/FormSection')) 
// const Section1 = dynamic(() => import("@/components/home/Section1"))
// const SectionDeal = dynamic(() => import("@/components/home/SectionDeal"))
// const SectionServices = dynamic(() => import("@/components/home/SectionServices"))
// const Section2 = dynamic(() => import("@/components/home/Section2"))
// const TestimonialsBig = dynamic(() => import("@/components/home/TestimonialsBig"))
// const SectionMetrics = dynamic(() => import('@/components/home/SectionMetrics')) 
const RecentProjects = dynamic(() => import('@/components/home/RecentProjects')) 
const TestimonialsSmall = dynamic(() => import("@/components/home/TestimonialsSmall"))
const StatisticsCards = dynamic(() => import("@/components/home/StatisticsCards"))
// const Pricing = dynamic(() => import("@/components/home/Pricing"))
// const WebSummit = dynamic(() => import("@/components/home/WebSummit"))
// const FAQ = dynamic(() => import("@/components/home/FAQ"))


const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center bg-white text-black 
                    snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>      
      <header className='w-full h-auto flex flex-col justify-center items-center pb-8 md:pb-16' id='heroSection'>
          <Hero />
          {/* <HeroExtend  /> */}
          
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
        <div className='w-full h-auto flex justify-center items-center bg-MainBG py-16 md:py-32 '>
          <StatisticsCards statisticSection={statisticSection[0]} statisticsItems={statisticsItems} /> 
        </div>
      </section>


      <CareerHighlights />
      <AchievementsSection />

      <EducationAndCertifications />

      <IntroductionSection />
     



    </main>
  )
}

export default page