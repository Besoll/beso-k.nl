import NavigationStatic from "@/components/global/NavigationStatic";
import { navButtonTitle, navItemsStatic } from "@/data";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 




const layout = ({ children,  }: { children: React.ReactNode }) => {
  const downloadPasswordForCV = process.env.NEXT_DOWNLOAD_PASSWORD_FOR_CV || "password for CV";
  return (
    <>
        <NavigationStatic navItemsStatic={navItemsStatic} navButtonTitle={navButtonTitle} downloadPasswordForCV={downloadPasswordForCV}/>
        {children}
        <Footer />
    </>
  )
}

export default layout