'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { ctaButtonTitles } from '@/data'
const Tag = dynamic(() => import('@/components/global/Tag'))
const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'))
const FAQBox = dynamic(() => import('@/components/ui/FAQBox'));




export default function FAQ({
  accordionTitle, accordionInput,
} : {
  accordionTitle: {
    tag: string,
    title: string,
  },
  accordionInput: {
    id: number,
    divId: string,
    title: string,
    subTitle: string,
    subTitle2: string,
    subTitle3: string,
    subTitle4: string,
  } [];  
}) {
  const [open, setOpen] = useState<number>(1)
  return (
    <>
      <div className='flex w-full flex-col justify-center items-center md:items-start gap-6 md:gap-8 lg:px-6 scroll-mt-4 snap-start my-12 pt-4 md:pt-12' id="accordionstart">
        <Tag title={accordionTitle.tag} otherClass="text-MainRed font-bold" icon="tagLineBlue.svg"/>
        <h2 className='headline text-center md:text-left text_black text-black'>
          {accordionTitle.title}
        </h2> 
        <CtaButton ctaButtonTitles={ctaButtonTitles[4]} /> 
      </div> 
      <div className="flex w-full justify-center items-center flex-col space-y-2 px-2 md:px-0">
        {accordionInput.map(( i )  => (
          <FAQBox 
          key={i.id}
          title={i.title}
          subTitle={i.subTitle}
          subTitle2={i.subTitle2}
          subTitle3={i.subTitle3}
          subTitle4={i.subTitle4}
          divId={i.divId}
          i={i.id}
          isOpen={open}
          setIsOpen={setOpen}
          />
        ))}
      </div>
    </>
  )
}