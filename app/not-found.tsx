import NotFound404 from "@/components/global/lotties/404";
import NavigationStatic from "@/components/global/NavigationStatic";
import { navButtonTitle, navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
import Link from "next/link";
const Logo = dynamic(() => import('@/components/global/Logo'))
const Footer = dynamic(() => import('@/components/global/Footer') ) 


const NotFoundPage = () => {
  return (
    <>
        <NavigationStatic navItemsStatic={navItemsStatic} navButtonTitle={navButtonTitle}/>
        
        <div className="min-h-screen max-h-screen flex flex-col items-center justify-center ">
            <NotFound404 className="h-[30vw]"/>
            <h1 className="text-base font-bold mb-2">404 | Page Not Found</h1>
            <Link href='/' arial-label='navigate to main page'>
                <div className="flex justify-center items-center py-2 w-ull max-w-[300px] gap-4 flex-col">
                    <Logo otherClass="w-full h-auto" src='../logo/logo.svg'/>
                    <h1 className="text-xl font-bold bg-MainBG/90 text-white rounded-xl hover:bg-MainBG hover:shadow-xl hover:scale-105 transition ease-out cursor-pointer px-4 py-2">
                        Go Home
                    </h1>                
                </div>
            </Link>
        </div>
        <Footer />
    </>
  )
}

export default NotFoundPage
