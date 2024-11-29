'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-owlGreen-900 to-owlGreen-400" id='hero'>
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full opacity-50"
      >
        {/* Decorative Background Animation */}
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-gradient-to-r from-owlGreen-700 to-owlGreen-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-gradient-to-l from-owlGreen-600 to-owlGreen-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </motion.div>
      {/* Hero content */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full p-6 text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Image
            src="/me.webp"
            alt="Beso Kavzharadze"
            width={150}
            height={150}
            className="rounded-full shadow-lg transition-transform duration-300 ease-in-out"
          />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Beso Kavzharadze
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Seeking an opportunity in Technology, Creative Services, or Digital Marketing
        </motion.p>
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-8 py-4 bg-owlGreen-600 hover:bg-owlGreen-700 text-white rounded-full shadow-lg transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Beso_Kavzharadze_CV.pdf"
            className="px-8 py-4 border-2 border-owlGreen-600 text-white rounded-full shadow-lg hover:bg-white hover:text-owlGreen-600 transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
