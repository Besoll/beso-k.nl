import { Spotlight } from '@/components/ui/Spotlight'

const SpotlightDivs = () => {
  return (
    <div className=''>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#883D07'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#883D07'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='#FDA800'/>
    </div>
  )
}

export default SpotlightDivs