import { projects } from '@/data'
import { PinContainer } from '@/components/ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = ({ 
    projectItems 
} : {
        projectItems: {
            title: string;
            titleColored: string;
            image: string;
            checkLive: string;
            
        }
    }) => {
  return (
    <div className='py-16 md:py-32 max-w-7xl ' id='projects'>
        <h2 className='heading'>
            {projectItems.title} {' '}
            <span className='text-MainBG'>{projectItems.titleColored}</span>
        </h2>
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-16 gap-y-4 md:gap-y-20 lg:gap-y-28 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, link, ariaLabel }) => (
                <div key={id} className='h-[36rem] sm:h-[45rem] md:h-[41rem] lg:min-h-[32.5rem] sm:w-[570px] w-[80vw] flex items-center justify-center'>
                    <PinContainer title={link} href={link}>
                        <div className='w-[80vw] md:w-[570px] h-[30vh] sm:h-[40vh] relative flex justify-center items-center overflow-hidden mb-10 '>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-MainBG '>
                                <Image 
                                    src={projectItems.image}
                                    alt={projectItems.title}
                                    width={200}
                                    height={200}
                                    className='w-full h-auto'
                                />
                            </div>
                            <Image 
                                    src={img}
                                    alt={title}
                                    width={800}
                                    height={800}
                                    className='w-full h-atuo z-10 absolute bottom-0'
                                />
                        </div>

                        <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h2>

                        <p className='lg:text-xl lg:font-normal text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='w-full flex justify-between items-center mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] bg-white rounded-full w-8 h-4  md:w-16 md:h-8 flex justify-center items-center' 
                                    >
                                        <Image 
                                            src={icon}
                                            alt={icon}
                                            width={50}
                                            height={50}
                                            className='w-full h-atuo p-0'
                                        />
                                    </div>
                                ))}
                            </div>
                            <Link
                                href={link}
                                aria-label={ariaLabel}
                                target='_blank'
                            >
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-MainBG'>{projectItems.checkLive}</p>
                                    <FaLocationArrow className='ms-3' color="#0f67ae"/>
                                </div>
                            </Link>
                        </div>

                    </PinContainer>
                </div>
            ))}
        </div>

    </div>
  )
}

export default RecentProjects