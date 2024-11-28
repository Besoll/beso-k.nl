"use client"

import { FC } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));

const CareerHighlights: FC = () => {
  const careerData = [
    {
      year: "JUN 2024 - Present",
      position: "CTO & Co-Founder",
      company: "OwlWeb Agency and OwlWeb Studio, Netherlands",
      description: "Spearheading the development of high-performance websites and digital solutions for diverse clients, focusing on superior user experience, performance, and strategic alignment with business goals. Overseeing a multidisciplinary team of developers and designers, ensuring advanced SEO, SEM, and market-leading results for clients.",
      logo: "/logosWork/owlweb-black.svg",
      companyInit: "",
      type: "Full-Time"
    },
    {
        year: "AUG 2024 - Present",
        position: "CEO & Founder",
        company: "beSok, Netherlands",
        description: "Leading operations at Besok.nl with a focus on custom website development and digital marketing strategies. Building strong client relationships, implementing efficient and creative web solutions, and driving early-stage growth for the company.",
        logo: "/logosWork/besok.svg",
        companyInit: "",
        type: "Part-Time",
      },
      {
        year: "MAR 2024 - Present",
        position: "COO/CTO & Co-Founder",
        company: "Willingson, Georgia",
        description: "Responsible for leading marketing services, developing digital solutions, and overseeing technological innovation. Successfully deployed top talents in the EU and US markets, enhancing company growth and visibility.",
        logo: "/logosWork/willingson.jpeg",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "APR 2023 - JUN 2024",
        position: "Senior Full Stack Developer, Marketing and Video Specialist",
        company: "QOQU B.V., Zongericht, Zoneadviseerd, Zogneschikt, Netherlands",
        description: "Developed high-performance landing pages, optimized marketing strategies, and led a multidisciplinary team to ensure effective client engagements. Delivered a significant increase in sales growth and improved cost efficiency for digital campaigns.",
        logo: "/logosWork/qoqu.svg",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "JUL 2018 - APR 2023",
        position: "Senior Graphic Designer / Full Stack Developer",
        company: "SC SOREL SRL, Romania",
        description: "Responsible for creating digital and print graphic designs, managing multimedia content, and developing web solutions. Successfully launched multiple web applications, enhancing user experience and client visibility.",
        logo: "/logosWork/sorel.png",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "OCT 2018 - JAN 2023",
        position: "Head of Digital Marketing Department / Full Stack Developer",
        company: "MontanaSibiu, M-Group, Romania",
        description: "Led digital marketing, product integration into marketplaces, and brand development. Enhanced brand visibility and drove significant sales growth through AI-driven XML listings and strategic digital initiatives.",
        logo: "/logosWork/montana.webp",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "NOV 2017 - AUG 2021",
        position: "Head of Digital Marketing",
        company: "Craft Brewery and Kitchen ORITONA, Georgia",
        description: "Developed digital marketing strategies and campaigns that increased brand visibility and sales by 190%. Created an engaging social media network to establish TWO TONS as a leader in the HORECA sector.",
        logo: "/logosWork/2tona.jpeg",
        companyInit: "",
        type: "Part-Time",
      },
      {
        year: "MAR 2019 - JAN 2023",
        position: "Online Marketer / Full Stack Developer",
        company: "Complex Turistic Casianna, Romania",
        description: "Created successful seasonal campaigns, integrated services into tourist guides, and managed social media to enhance brand engagement and increase customer visibility.",
        logo: "/logosWork/casiana.png",
        companyInit: "",
        type: "Part-Time",
      },
      {
        year: "SEP 2016 - OCT 2018",
        position: "Head of Digital Marketing",
        company: "Craft Brewery Black Lion, Georgia",
        description: "Led digital marketing campaigns that boosted brand growth and positioned Black Lion as a leader in the craft beer market. Played a pivotal role in the acquisition of the brand by Heineken.",
        logo: "/logosWork/blackLion.jpg",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "FEB 2014 - DEC 2018",
        position: "CEO | Founder",
        company: "Tbilisi Information Stand, Georgia",
        description: "Developed alternative advertising channels, secured exclusive advertising rights, and built successful campaigns that led to the widespread adoption of low-budget advertising solutions in Georgia.",
        logo: "/logosWork/TSS.jpeg",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "JAN 2021 - DEC 2022",
        position: "Software Developer / COO | Founder",
        company: "TablouriCanvas24 SRL - Canvas24, Romania",
        description: "Built and maintained an AI-powered e-commerce platform with over 150,000 products. Migrated to new tech stacks, enhancing scalability and performance.",
        logo: "/logosWork/canvas24.jpg",
        companyInit: "",
        type: "Full-Time",
      },
      {
        year: "FEB 2015 - NOV 2016",
        position: "Managing Partner and Co-Founder",
        company: "TAKE TWO PRODUCTION, Georgia",
        description: "Focused on fundraising and managing brand collaborations for movie production projects. Successfully secured funds for the production of 'Racha Chemi Sikvaruli' and 'Indigo Kids' TV series.",
        logo: "",
        companyInit: "TAKE TWO",
        type: "Part-Time",
      },
      {
        year: "2013 - 2018",
        position: "Front-End Developer / Graphic Designer",
        company: "Freelance, Worldwide",
        description: "Provided freelance design and development services, delivering responsive web designs and high-quality graphic assets for diverse clients globally.",
        logo: "",
        companyInit: "FREELANCE",
        type: "Freelance",
      },
      {
        year: "SEP 2014 - MAR 2016",
        position: "CTO / Marketing and Sales / Founder",
        company: "2Be Production, Georgia",
        description: "Implemented 3D mapping and visualizations for major public displays, collaborating with art directors to produce educational experiences.",
        logo: "",
        companyInit: "2Be Production",
        type: "Full-Time",
      },
      {
        year: "SEP 2014 - MAR 2016",
        position: "",
        company: "",
        description: "",
        logo: "/logosWork/",
        companyInit: "",
        type: "-Time",
      }
    ];

  return (
    <section id="career" className="w-full py-20 bg-gray-100 text-center">
      <motion.div
        className="container mx-auto px-6 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Career Highlights
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A timeline showcasing the major milestones and professional experiences throughout my career.
        </motion.p>
        <div className="mt-12 w-full flex flex-col items-center gap-10">
          {careerData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center gap-4 bg-white p-6 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 1, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute -left-10 -top-10 w-24 h-24 bg-gradient-to-br from-owlGreen-500 to-owlGreen-700 opacity-30 blur-2xl rounded-full pointer-events-none"
                animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.div>
              
              <motion.div
                className="flex-shrink-0 w-40 h-40 mr-2  p-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={80}
                    height={80}
                    className='object-contain w-full h-full grayscale hover:grayscale-0 transition duration-300 ease-in-out'
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-700 font-bold">
                    {item.companyInit}
                  </div>
                )}
              </motion.div>
              <div className="text-left md:ml-6">
                <motion.h3
                  className="text-2xl font-bold text-owlGreen-500"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.position}
                </motion.h3>                
                <motion.p
                  className="text-xl text-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  @ {item.company}
                </motion.p>
                <motion.p
                  className="text-xl text-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.year}
                </motion.p>
                <p className="text-base text-gray-600 mt-2">
                  {item.description}
                </p>
                <span className="absolute top-2 right-4 text-sm font-semibold text-gray-400  px-2 py-1 rounded-lg">
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CareerHighlights;
