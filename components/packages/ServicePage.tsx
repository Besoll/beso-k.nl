"use client"
// ServicePage.tsx
import { FC, useState } from "react";
import { motion } from "framer-motion";
// Import all the icons you need
import { AiOutlineCalendar, AiOutlineShop, AiOutlineDollar, AiOutlineCreditCard } from "react-icons/ai";
import { FaLaptopCode, FaProjectDiagram, FaTasks, FaShippingFast, FaUserCheck } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineSettings, MdOutlineLaunch, MdSecurity, MdOutlinePayment, MdOutlineSupportAgent } from "react-icons/md";
import dynamic from 'next/dynamic'
import { formItems } from "@/data";
const FormSection = dynamic(() => import('@/components/home/FormSection')) 
const Pricing = dynamic(() => import("@/components/home/Pricing"))

// Define a mapping of icon names to actual icon components
const iconMap = {
  AiOutlineCalendar: AiOutlineCalendar,
  AiOutlineShop: AiOutlineShop,
  AiOutlineDollar: AiOutlineDollar,
  AiOutlineCreditCard: AiOutlineCreditCard,
  FaLaptopCode: FaLaptopCode,
  FaProjectDiagram: FaProjectDiagram,
  FaTasks: FaTasks,
  FaShippingFast: FaShippingFast,
  FaUserCheck: FaUserCheck,
  MdOutlineDesignServices: MdOutlineDesignServices,
  MdOutlineSettings: MdOutlineSettings,
  MdOutlineLaunch: MdOutlineLaunch,
  MdOutlineSupportAgent: MdOutlineSupportAgent,
  MdSecurity: MdSecurity,
  MdOutlinePayment: MdOutlinePayment,
};

interface ProcessStep {
  step: string;
  icon: string;
}

interface Benefit {
  text: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface TechItem {
  name: string;
  // logo: string;
}

interface ServicePageProps {
  title: string;
  heroDescription: string;
  heroImage: string;
  overviewTitle: string;
  processTitle: string;
  benefitsTitle: string;
  techTitle: string;
  faqTitle: string;
  overview: string;
  process: ProcessStep[];
  benefits: Benefit[];
  faq: FAQ[];
  techInfrastructure: TechItem[];
  formDataNumber: number;
  startText: string;
}

const ServicePage: FC<ServicePageProps> = ({
  title,
  heroDescription,
  heroImage,
  overviewTitle,
  processTitle,
  benefitsTitle,
  techTitle,
  faqTitle,
  overview,
  process,
  benefits,
  faq,
  techInfrastructure,
  formDataNumber,
  startText,
}) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section className="">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-xl mt-4">{heroDescription}</p>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 mt-12 flex md:gap-8 flex-col">

        {/* Tech Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">{techTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center">
            {techInfrastructure.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" /> */}
                <p className="text-lg font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">{overviewTitle}</h2>
          <p className="text-lg text-gray-700">{overview}</p>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="bg-gray-100 -m-4 md:p-8 md:rounded-lg mb-12"
        >
          <h2 className="text-3xl font-semibold mt-2 md:mt-0 md:mb-6 p-4 md:p-0">{processTitle}</h2>
          <ul className="space-y-4 p-4 md:p-0 mb-8 md:mb-0">
            {process.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="flex items-center text-gray-800 text-lg p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  {IconComponent && <IconComponent className="text-2xl text-MainBG mr-2 md:mr-4" />}
                  <span>{item.step}</span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">{benefitsTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <li key={index} className="flex items-center text-gray-700 text-lg">
                  {IconComponent && <IconComponent className="text-2xl text-green-500 mr-4" />}
                  {benefit.text}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12 flex flex-col justify-center items-center"
        >
          <p className="text-lg font-medium text-center">{startText}</p> 
          <FormSection formItems={formItems[formDataNumber]} />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="bg-white shadow-lg p-8 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6">{faqTitle}</h2>
          <ul className="space-y-6">
            {faq.map((item, index) => (
              <li key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-semibold text-lg flex justify-between items-center"
                >
                  <span>{item.question}</span>
                  <span>{activeFAQ === index ? '-' : '+'}</span>
                </button>
                {activeFAQ === index && (
                  <p className="text-gray-700 mt-2">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>


        
           
      </div>

      <div className="bg-MainBG flex justify-center items-center mt-4 md:mt-8">
          {/* Pricing */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-7xl p-8 mb-12"
        >
          <Pricing  />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
