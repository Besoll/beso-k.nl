"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const MagicButtonChat = ({
    title, chatAria, icon, otherClass, position, items, onMouseEnter, onMouseLeave
}: {
    icon: React.ReactNode;
    position: string;
    title: string,
    chatAria: string,
    otherClass: string,
    items: {
      chatLink: string,
      chatMessage: string,
    };
    onMouseEnter?: () => void;
    onMouseLeave?: () => void; 
}) => {
  const router = useRouter();
   const handleClick = () => {
    // Construct the WhatsApp message
    const message = encodeURIComponent(items.chatMessage);

    // Replace '1234567890' with your actual WhatsApp number
    const whatsappUrl = `${items.chatLink}?text=${message}`;

    // Open the WhatsApp link
    window.open(whatsappUrl, '_blank',);
};

  return (
    <button 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative inline-flex h-12 overflow-hidden text-white rounded-xl shadow-xl ${otherClass} hover:scale-105 transition duration-300 ease-in-out max-w-full`} 
      onClick={handleClick} 
      aria-label={chatAria}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#25D366_0%,green_50%,#25D366_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-7  hover:bg-[#25D366]  backdrop-blur-3xl gap-2 font-semibold`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButtonChat