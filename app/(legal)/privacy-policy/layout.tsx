import NavigationStatic from "@/components/global/NavigationStatic";
import { navButtonTitle, navItemsStatic } from "@/data";
import { Metadata } from "next";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/global/Footer') ) 

const titleBL = 'Privacy Policy';
const urlBL = 'https://www.besok.nl';
const imageBL = 'https://www.besok.nl/_next/image?url=%2Fhero.webp&w=3840&q=75';
const descriptionBL = 'Privacy Policy - legal page';

export const metadata: Metadata = {
  applicationName: "Website",
  title: {
    default: titleBL,
    template: "%s | beSok.nl",
  },
  description: descriptionBL,
  alternates: { canonical: urlBL },
  openGraph: {
    type: "website",
    url: urlBL,
    title: titleBL,
    description: descriptionBL,
    siteName: titleBL,
    images: [{ url: imageBL, }],
  },
  other: {
    "twitter:card": imageBL,
    "twitter:site": urlBL,
    "twitter:title": titleBL,
    "twitter:description": descriptionBL,
    "twitter:image": imageBL,
    "apple-mobile-web-app-title": titleBL,
    
  }
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <NavigationStatic navItemsStatic={navItemsStatic} navButtonTitle={navButtonTitle} />
        {children}
        <Footer />
    </>
  )
}

export default layout