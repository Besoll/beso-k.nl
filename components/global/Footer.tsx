import Link from 'next/link'
import { FooterItemsCredentials, FooterItemsPages, FooterItemsTerms } from './footerItems'
import { ctaWhatsAppChat, footerItemsCredentials, footerItemsKeywords, footerItemsMaster1, footerItemsMaster2, footerItemsPages, footerItemsTechnologies, footerItemsTerms, getFooterSectionTitles } from '@/data'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaLocationArrow, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('@/components/global/Logo'))
const MagicButton = dynamic(() => import('@/components/ui/MagicButton')) 
const LanguageSwitcher = dynamic(() => import('@/components/ui/LanguageSwitcher'))
const MagicButtonChat = dynamic(() => import('@/components/ui/MagicButtonChat')) 
const WebSummitFooter = dynamic(() => import('@/components/home/WebSummitFooter')) 
const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => mod.FaWhatsapp));


// Helper function to format the current date
const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {      
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('nl-NL', options);
    };


const Footer = () => {
    const { ctaTitle, ctaButton, ctaLink, ctaAria, pages, legal, services, technologies, masterTitle1, masterTitle2, SocialMedia, LinkedIn, GitHub, Facebook, Instagram, Twitter, YouTube, switchLanguage, copyright1, copyright2, chatButtonTitle, chatButtonAria, chatLink, chatMessage } = getFooterSectionTitles;
    const currentDateFooter = getCurrentDate();

    const companyVAT = process.env.NEXT_PUBLIC_COMPANY_VAT || 'Legal VAT';
    const companyKVK = process.env.NEXT_PUBLIC_COMPANY_KVK || 'Legal KVK';
  return (
    <footer className="w-full max-w-full overflow-hidden flex flex-col justify-center items-center shadow-lg bg-black text-gray-300 text-md md:text-base px-2 sm:px-4 py-16 md:py-20" >

        {/* <div className="max-w-7xl flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-8 md:gap-8 lg:gap-32">
            <div className='flex flex-col justify-center items-center w-[240px] h-[300px] sm:w-[380px] sm:h-[350px] md:w-[450px] md:h-[360px] xl:w-[400px] xl:h-[400px] md:mr-2 gap-3'>
                <Link className="flex justify-center items-center" href="/" aria-label="navigate to form section">
                    <Logo otherClass="h-16" src='/logo/logo-white.svg'/>
                </Link>
                <hr className="w-full border-black-300 md:mx-auto -mt-1"/>
                <p className='text-center text-white'> 
                    {ctaTitle}
                </p>
                <hr className="w-full border-black-300 md:mx-auto"/>

                <div className='w-full flex justify-center items-center flex-col gap-1 sm:gap-6'>
                    <Link href={ctaLink} aria-label={ctaAria}>
                      <MagicButton 
                        title={ctaButton}
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClasses=""
                        otherClassesButton='mb-0 p-0 md:mt-1 mb-4 md:-mb-6'
                        />
                    </Link>

                    <MagicButtonChat
                        title='WhatsApp Me'
                        icon={<FaWhatsapp />}
                        position='right'
                        chatAria='WhatsApp Me'
                        items={ctaWhatsAppChat[0]}
                        otherClass='text-sm  py-[1px] px-[1px]'
                    />
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row'>
                <div className='sm:w-full flex flex-row  text-center lg:text-left justify-between gap-3 sm:gap-8 py-8 lg:px-2'>
                    <ul className='w-1/3 sm:w-full flex flex-col text-left md:w-full max-w-[150px] md:max-w-[300px] gap-2'>
                        <li className="w-full font-semibold uppercase my-2 px-0 pr-2 md:pr-8">
                            {pages}
                            <hr className="my-2 border-black-400 md:mx-auto"/>
                        </li>
                        <FooterItemsPages footerItemsPages={footerItemsPages} />
                    </ul>
                    <ul className='w-full flex flex-col text-right sm:min-w-[200px] md:w-full gap-2 '>
                        <li className="font-semibold uppercase my-2 px-2">
                            {legal} 
                            <hr className="my-2 border-black-400 md:mx-auto"/>
                        </li>
                        <FooterItemsTerms footerItemsTerms={footerItemsTerms} />                 
                    </ul> 
                </div>
            </div>            
        </div> */}
        
{/*         
        <WebSummitFooter />
        <LanguageSwitcher switchLanguage={switchLanguage} />

        KVK: {companyKVK}

        

        <hr className="my-6 border-black-400 sm:mx-auto lg:my-8" /> */}
        
        <div className="flex justify-center text-center  pb-6 flex-col">
            {/* <FooterItemsCredentials  footerItemsCredentials={footerItemsCredentials} /> */}
            <hr className="w-full my-2 border-black-400 md:mx-auto"/>
            <div className='text-xs'>
                    {copyright1} {copyright2} - {' '}
                    <span className='capitalize'>
                        {currentDateFooter}
                    </span>
            </div>
        </div>

        {/* <div className="flex justify-center text-center py-4 flex-col">
            <p>{SocialMedia}</p>            
            <div className='text-3xl flex flex-row gap-2 justify-center items-center'>
                    <Link href={LinkedIn} aria-label="LinkedIn" target='_blank'>
                        <FaLinkedin className='hover:text-MainBG hover:scale-105 transition ease-in-out cursor-pointer' title='LinkedIn'/>
                    </Link>
                    <Link href={Facebook} aria-label="Facebook" target='_blank'>
                        <FaFacebookSquare className='hover:text-MainBG hover:scale-105 transition ease-in-out cursor-pointer' title='Facebook'/>
                    </Link>
                    <Link href={Instagram} aria-label="Instagram" target='_blank'>
                        <FaInstagramSquare className='hover:text-MainBG hover:scale-105 transition ease-in-out cursor-pointer' title='Instagram'/>
                    </Link>
                    <Link href={GitHub} aria-label="GitHub" target='_blank'>
                        <FaGithubSquare className='hover:text-MainBG hover:scale-105 transition ease-in-out cursor-pointer' title='GitHub'/>
                    </Link>
                    <Link href={Twitter} aria-label="Twitter" target='_blank'>
                        <FaTwitterSquare className='hover:text-MainBG hover:scale-105 transition ease-in-out cursor-pointer' title='Twitter'/>
                    </Link>
                    <Link href={YouTube} aria-label="YouTube" target='_blank'>
                        <FaYoutubeSquare className='hover:text-MainBG hover:scale-105 transition ease-in-out cursor-pointer' title='YouTube'/>
                    </Link>
            </div>
        </div> */}



       
    </footer>
  )
}

export default Footer