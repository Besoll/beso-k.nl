"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import Image from 'next/image';

const EducationAndCertifications: FC = () => {

    
    const [touched, setTouched] = useState(false);

    const handleTouch = () => {
      setTouched(true);
      setTimeout(() => setTouched(false), 1000); // Reset the touched state after 1 second
    };



  const educationData = [
    {
      year: "2008 - 2010",
      title: "Bachelor of Science in Information Technology (Not Finished)",
      institution: "Tbilisi State University, Tbilisi, Georgia",
      description: "Specializing in programming languages, software engineering, and digital transformation.",
      icon: <FaGraduationCap size={60} className="text-blue-600" />, 
    },
    {
      year: "2004 - 2008",
      title: "Bachelor’s Degree in International Economic Relations",
      institution: "Tbilisi State University, Tbilisi, Georgia",
      description: "Courses: Marketing, Economic Informatics, World Economic, International Statistics, International Management, International Trade Operations, WTO and Georgia, Economic Diplomacy, World Market Globalization, Entrepreneurship (Firm) Economic, International Organization, Business Organization.",
      icon: <FaGraduationCap size={60} className="text-green-600" />, 
    },
    {
      year: "2000 - 2004",
      title: "Physic/Mathematic High School Diploma",
      institution: "I. Vekua Physic‑Mathematical High School, Tbilisi, Georgia",
      description: "Specialized in Physics and Mathematics.",
      icon: <FaGraduationCap size={60} className="text-yellow-600" />, 
    }
  ];

  const certificationsData = [
    {
      year: "NOV 2022",
      title: "Next JS & Typescript with Shopify Integration",
      institution: "Udemy",
      description: "Skills: Next.js, Typescript, Shopify Integration.",
      icon: <FaCertificate size={30} className="text-purple-600" />, 
    },
    {
      year: "SEP 2022",
      title: "Adobe XD Essential Training: Design",
      institution: "Udemy",
      description: "Skills: User Experience Design (UED), UI Design, Adobe XD.",
      icon: <FaCertificate size={30} className="text-red-600" />, 
    },
    {
      year: "SEP 2022",
      title: "Affinity Designer for UX Design",
      institution: "Udemy",
      description: "Skills: User Experience Design (UED), UI Design, Affinity Designer.",
      icon: <FaCertificate size={30} className="text-orange-600" />, 
    },
    {
      year: "SEP 2022",
      title: "Crafting Meaningful HTML",
      institution: "Udemy",
      description: "Skills: Semantic HTML.",
      icon: <FaCertificate size={30} className="text-teal-600" />, 
    },
    {
      year: "AUG 2022",
      title: "Building a GraphQL Project with React.js",
      institution: "Udemy",
      description: "Skills: Node.js, React.js, Vite, GitHub, Tailwindcss, GraphQL.",
      icon: <FaCertificate size={30} className="text-blue-600" />, 
    },
    {
      year: "AUG 2022",
      title: "HTML Essential Training + Metadata in the Head + Structured Semantic Data",
      institution: "Udemy",
      description: "Use meta tags, and leverage tools like the Structured Data Markup Helper and Structured Data Testing Tool from Google to add microdata and JSON‑LD code to pages.",
      icon: <FaCertificate size={30} className="text-pink-600" />, 
    },
    {
      year: "AUG 2022",
      title: "Learning GraphQL",
      institution: "Udemy",
      description: "Skills: GraphQL.",
      icon: <FaCertificate size={30} className="text-yellow-600" />, 
    },
    {
      year: "JUL 2012",
      title: "Marketing Certificate",
      institution: "ODIMM, Ministry of Economy of Moldova",
      description: "Skills: Marketing strategies and applications.",
      icon: <FaCertificate size={30} className="text-green-600" />, 
    },
    {
      year: "JUN 2012",
      title: "Labor Legislation Certificate",
      institution: "ODIMM, Ministry of Economy of Moldova",
      description: "Skills: Labor laws and regulations.",
      icon: <FaCertificate size={30} className="text-blue-600" />, 
    },
  ];

  return (
    <section id="education" className="w-full py-20 bg-gradient-to-b from-white to-gray-100 text-black relative">

    {/* Image floating animatino with woosh */}
      <div className="relative mx-auto w-[300px] h-[300px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: touched ? 0 : [0, -20, 0], rotate: touched ? 0 : [0, 10, -10, 0] }}
          transition={touched ? { duration: 4, ease: 'easeInOut' } : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          onClick={handleTouch}
          className="cursor-pointer relative"
        >
          <motion.div
            animate={
              touched
                ? { y: ['0%', '-5%', '-10%', '-15%', '-20%', '-25%', '-30%', '-35%', '-40%', '-45%', '-50%', '-55%', '-60%', '-65%', '-70%', '-75%', '-80%', '-85%', '-90%', '-95%', '-100%', '-105%', '-110%', '-115%', '-120%', '-125%', '-130%', '-135%', '-140%', '-145%', '-150%', '-155%', '-160%', '-165%', '-170%', '-175%', '-180%', '-185%', '-190%', '-195%', '-200%', '-205%', '-210%', '-215%', '-220%', '-225%', '-230%', '-235%', '-240%', '-245%', '-250%'], translate: 1500, transition: { y: ['0%', '-5%', '-10%', '-15%', '-20%', '-25%', '-30%', '-35%', '-40%', '-45%', '-50%', '-55%', '-60%', '-65%', '-70%', '-75%', '-80%', '-85%', '-90%', '-95%', '-100%', '-105%', '-110%', '-115%', '-120%', '-125%', '-130%', '-135%', '-140%', '-145%', '-150%', '-155%', '-160%', '-165%', '-170%', '-175%', '-180%', '-185%', '-190%', '-195%', '-200%', '-205%', '-210%', '-215%', '-220%', '-225%', '-230%', '-235%', '-240%', '-245%', '-250%'], duration: 4800000, ease: 'linear' }, transitionEnd: { y: 0 } }
                : {}
            }
            transition={{ duration: 6000, ease: ['easeIn', 'easeOut', 'easeInOut'] }}
          >
            <Image
              src='/duck-websummit.webp'
              alt='duck websummit andria made Lego'
              width={400}
              height={400}
              className='object-cover transition-transform duration-500 ease-in-out'
            />
          </motion.div>
          <motion.div
            className='absolute inset-0 bg-owlGreen-500 opacity-20 blur-xl rounded-full'
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
          {touched && (
            <motion.div
              className='absolute inset-0 flex justify-center items-center'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 0.6 }}
            >
              <div className='bg-red text-white font-bold p-4 rounded-full shadow-lg'>
                🚀 weeeeee!
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>


      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-owlGreen-700"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Education & Certifications
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore my academic milestones and the certifications that have significantly contributed to my professional skills.
        </motion.p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 rounded-lg shadow-lg bg-white cursor-pointer transform transition-transform ease-in-out duration-500 border-2 border-owlGreen-500"
              whileHover={{
                y: -20,
                scale: 1.15,
                boxShadow: "0px 30px 60px rgba(0, 128, 0, 0.3)",
                rotate: [0, 5, -5, 3, -3, 0],
                skewY: [0, 2, -2, 1, -1, 0],
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              animate={{
                rotate: [0, 0, -3, 3, -2, 2, 0],
                y: [0, -4, 0, 4, 0],
                x: [0, -3, 3, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transformOrigin: 'top center' }}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-owlGreen-600 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 text-center">
                {item.year}
              </p>
              <p className="text-base text-gray-600 mt-3 text-center">
                {item.institution}
              </p>
              <p className="text-base text-gray-700 mt-3 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificationsData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-md bg-gradient-to-br from-owlGreen-100 to-white cursor-pointer transform transition-transform ease-in-out duration-500"
              whileHover={{
                y: -15,
                scale: 1.12,
                boxShadow: "0px 20px 40px rgba(0, 128, 0, 0.2)",
                rotate: [0, -5, 5, -3, 3, 0],
                skewY: [0, 3, -3, 2, -2, 0],
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              animate={{
                y: [0, -10, 10, -10, 0],
                x: [0, -3, 3, -2, 2, 0],
                rotate: [0, 2, -2, 1, -1, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="mb-2">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-owlGreen-500 text-center">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 text-center">
                {item.year}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {item.institution}
              </p>
              <p className="text-sm text-gray-700 mt-2 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertifications;
