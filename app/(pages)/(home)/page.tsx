
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

      <ProjectsSection />

    </main>
  )
}

export default page