"use client"
import { useState } from 'react';
import { ctaButtonTitles, ctaWhatsAppChat } from '@/data';
import dynamic from 'next/dynamic';

const CtaButton = dynamic(() => import('@/components/global/ctaButtons/CtaButton'));
const MagicButtonChat = dynamic(() => import('@/components/ui/MagicButtonChat'));
const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => mod.FaWhatsapp));
const Tag = dynamic(() => import('@/components/global/Tag'));
const Image = dynamic(() => import('next/image'));

const SectionDeal = ({
    i
}: {
    i: {
        tag: string;
        headlinePart1: string;
        headlinePart2: string;
        subtitle: string;
        text1: string;
        textPromoCode: string;
        text2: string;
        textPromoCode2: string;
        text3: string;
        image: string;
        alt: string;
        image2: string;
        alt2: string;
        image3: string;
        alt3: string;
    };
}) => {
    // State to manage hover effect
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    // Handlers to manage hover state
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleMouseEnter2 = () => setIsHovered2(true);
    const handleMouseLeave2 = () => setIsHovered2(false);

    return (
        <div className='w-full max-w-[1440px] flex justify-center items-center flex-col-reverse md:flex-row rounded-none gap-8 md:px-20 px-4 pb-20 md:pb-0'>
            <div className='w-full md:hidden flex gap-4 justify-center items-center'>
                <CtaButton
                    ctaButtonTitles={ctaButtonTitles[2]}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <MagicButtonChat
                    title='WhatsApp Me'
                    icon={<FaWhatsapp />}
                    position='right'
                    chatAria='WhatsApp Me'
                    items={ctaWhatsAppChat[0]}
                    otherClass='text-sm sm:text-xl md:text-2xl px-4 py-8'
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                />
            </div>
            <div className='w-full h-auto flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                <Tag title={i.tag} otherClass="text-MainBG font-bold" icon="tagLineBlue.svg" />
                <p className='w-full max-w-3/4 text-3xl md:text-4xl font-semibold text-black text-center md:text-left'>
                    {i.headlinePart1} <br />
                    {i.headlinePart2}
                </p>
                <div className='w-full flex flex-row justify-center md:justify-start items-center gap-4 mb-2 md:mb-4'>
                    <p className='w-full text-black text-center md:text-left'>
                        {i.text1} {' '}
                        <strong className='padding px-2 rounded-xl bg-white/60'>"{i.textPromoCode}"</strong>
                        {' '} {i.text2} {' '}
                        <strong className='padding px-2 rounded-xl bg-white/60'>{i.textPromoCode2}</strong>
                        {' '} {i.text3}
                    </p>
                </div>
                <div className='hidden md:flex gap-4'>
                    <CtaButton
                        ctaButtonTitles={ctaButtonTitles[2]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <MagicButtonChat
                        title='WhatsApp Me'
                        icon={<FaWhatsapp />}
                        position='right'
                        chatAria='WhatsApp Me'
                        items={ctaWhatsAppChat[0]}
                        otherClass='text-sm sm:text-xl md:text-2xl md:px-4 py-8'
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                    />
                </div>
            </div>

            <div className="relative w-full">
                <Image
                    src={i.image}
                    alt={i.alt}
                    width={800}
                    height={1274}
                    className={`w-full md:w-2/3 h-auto rounded-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 ${isHovered || isHovered2 ? 'hidden' : 'block'}`}
                />
                <Image
                    src={i.image2}
                    alt={i.alt2}
                    width={800}
                    height={1274}
                    className={`w-full md:w-2/3 h-auto rounded-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 ${isHovered ? 'block' : 'hidden'}`}
                />
                <Image
                    src={i.image3}
                    alt={i.alt3}
                    width={800}
                    height={1274}
                    className={`w-full md:w-2/3 h-auto rounded-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:rotate-1 ${isHovered2 ? 'block' : 'hidden'}`}
                />
            </div>
        </div>
    );
};

export default SectionDeal;
