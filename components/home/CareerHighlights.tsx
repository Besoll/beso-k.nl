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
        description: "Spearheading the development of high‑performance websites and digital solutions for diverse clients, focusing on superior user experience, performance, and strategic alignment with business goals. Overseeing a multidisciplinary team of developers and designers, ensuring advanced SEO, SEM, and market‑leading results for clients.",
        descr2: "Successfully showcased OwlWeb as an ALPHA startup at Websummit 2024 Lisbon, generating 87 leads, securing 24 clients, 38 potential customers, and attracting an investor deal.",
        descr3: "Established collaboration memorandums with Georgian Innovation and Technology Agency, Doing in Georgia, and Invest in Georgia.",
        descr4: "Expanded technical partnerships and led critical projects that enhanced brand visibility and client satisfaction.",
        descr5: "Provided effective leadership and contributed to expanding the client base and building a strong presence in the web development sector. \n\nIntroduced automation strategies and streamlined workflows for improved delivery efficiency and enhanced team productivity.",
        logo: "/logos/owlweb-black.svg",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "AUG 2024 - Present",
        position: "CEO & Founder",
        company: "beSok, Netherlands",
        description: "Successfully showcased OwlWeb as an ALPHA startup at Websummit 2024 Lisbon, generating 87 leads, securing 24 clients, 38 potential customers, and attracting an investor deal.",
        descr2: "In just four months, established a base of 12 regular clients, ensuring consistent work and driving early-stage growth.",
        descr3: "Set strategic goals for brand development, achieving growth targets within the initial operational phase.",
        descr4: "Enhanced customer engagement strategies and facilitated successful onboarding, increasing client satisfaction and service quality.",
        descr5: "Implemented a comprehensive digital strategy to improve online visibility, driving lead generation and conversion rates.",
        logo: "/logosWork/besok.svg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "MAR 2024 - Present",
        position: "COO/CTO & Co-Founder",
        company: "Willingson, Georgia",
        description: "Responsible for leading marketing services, development of digital solutions, and overseeing technological innovation. Working closely with OwlWeb to deploy top talent in the EU and US markets.",
        descr2: "Successfully deployed 7 senior, 16 middle, and 8 junior-level developers to major clients in the EU and USA.",
        descr3: "Developed partnerships that amplified the company's global reach and diversified its services, contributing to international growth.",
        descr4: "Enhanced operational efficiency through team collaboration and creative problem-solving. Promoted technology-driven marketing campaigns that improved client results and brand visibility.",
        descr5: "",
        logo: "/logosWork/willingson.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "APR 2023 - JUN 2024",
        position: "Senior Full Stack Developer, Marketing and Video Specialist",
        company: "QOQU B.V., Zongericht, Zoneadviseerd, Zogneschikt, Netherlands",
        description: "Responsible for the end-to-end development of websites, landing pages, and marketing strategies. Utilized data-driven techniques to optimize performance across all digital touchpoints.",
        descr2: "Developed high-performance landing pages with exceptional Google Lighthouse scores. Lead the sales growth up to 800% in short period of time.",
        descr3: "Managed marketing and video production to drive lead conversion, lowering cost per lead by over 50% compared to industry standards.",
        descr4: "Led a multidisciplinary team, ensuring effective project management and successful client engagements.",
        descr5: "",
        logo: "/logosWork/qoqu.svg",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "JUL 2018 - APR 2023",
        position: "Senior Graphic Designer / Full Stack Developer",
        company: "SC SOREL SRL, Romania",
        description: "Responsible for creating digital and print graphic designs, managing multimedia content, and developing web solutions.",
        descr2: "Designed and launched multiple web applications, enhancing user experience and increasing client visibility. Created SOREL PRO internal CRM software.",
        descr3: "Developed the SOREL PRO Work Operating System, improving company‑wide operational efficiency.",
        descr4: "",
        descr5: "",
        logo: "/logosWork/sorel.png",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "OCT 2018 - JAN 2023",
        position: "Head of Digital Marketing Department / Full Stack Developer",
        company: "MontanaSibiu, M-Group, Romania",
        description: "Led the creation and design of products, brand development, corporate style, website, and landing pages.",
        descr2: "Integrated products into Romania's largest marketplaces, Emag.ro and Emag.hu, resulting in a 380% sales increase in the first three months and 460% in the first year.",
        descr3: "Developed AI-driven XML listings to obtain EAN codes for factory listings on GS1.ro.",
        descr4: "Enhanced brand visibility and market penetration through strategic digital initiatives.",
        descr5: "",
        logo: "/logosWork/montana.webp",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "NOV 2017 - AUG 2021",
        position: "Head of Digital Marketing",
        company: "Craft Brewery and Kitchen ORITONA, Georgia",
        description: "Developed and led digital marketing campaigns to align with business growth strategies. Built a comprehensive social media presence and increased brand visibility.",
        descr2: "Developed optimized campaigns that reduced lead prices while increasing sales by 190%.",
        descr3: "Created an engaging social media network that established TWO TONS as a leader in the HORECA sector in Georgia.",
        descr4: "Strategically positioned the brand within the competitive craft beer market, contributing to sustained growth.",
        descr5: "",
        logo: "/logosWork/2tona.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "MAR 2019 - JAN 2023",
        position: "Online Marketer / Full Stack Developer",
        company: "Complex Turistic Casianna, Romania",
        description: "Planned and executed digital campaigns, focusing on festive promotions and integrating services into local tourist guides and information centers.",
        descr2: "Created successful digital campaigns for Christmas and Easter sales, boosting seasonal bookings.",
        descr3: "Integrated hotel and restaurant services into local tourist guides and information centers, increasing visibility among travelers.",
        descr4: "Managed social networking and paid campaigns, enhancing online presence and customer engagement.",
        descr5: "",
        logo: "/logosWork/casiana.png",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "SEP 2016 - OCT 2018",
        position: "Head of Digital Marketing",
        company: "Craft Brewery Black Lion, Georgia",
        description: "Led the digital marketing strategy to enhance brand positioning, audience engagement, and customer acquisition.",
        descr2: "Played a pivotal role in the company's acquisition by Heineken by developing effective campaigns and social media strategies that led to substantial brand growth.",
        descr3: "Increased sales by 130% and reduced lead costs through data-driven digital campaigns.",
        descr4: "Established a successful YouTube channel and enhanced social media presence, positioning Black Lion as a recognizable name in the craft beer industry.",
        descr5: "",
        logo: "/logosWork/blackLion.jpg",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "FEB 2014 - DEC 2018",
        position: "CEO | Founder",
        company: "Tbilisi Information Stand, Georgia",
        description: "Created and implemented marketing campaigns, branding initiatives, and developed e-commerce applications. Conducted effective digital marketing strategies.",
        descr2: "Established an alternative advertising channel for low-budget advertisers, which became popular among 500 companies in Georgia.",
        descr3: "Successfully secured exclusive advertising rights for entrances and elevators in 2,500 buildings in Tbilisi, generating an advertising channel with 225,000 daily views.",
        descr4: "",
        descr5: "",
        logo: "/logosWork/TSS.jpeg",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "JAN 2021 - DEC 2022",
        position: "Software Developer / COO | Founder",
        company: "TablouriCanvas24 SRL - Canvas24, Romania",
        description: "Built and maintained a comprehensive e-commerce store with AI-powered product listing tools. Migrated platforms to more scalable technologies.",
        descr2: "Managed over 150,000 products through AI integration on various marketplaces like Emag, Amazon and Google Marketplace.",
        descr3: "Successfully migrated to new tech stacks (React.js, Next.js, GraphQL) to enhance scalability and performance.",
        descr4: "",
        descr5: "",
        logo: "/logosWork/canvas24.jpg",
        companyInit: "",
        type: "Full-Time"
      },
      {
        year: "FEB 2015 - NOV 2016",
        position: "Managing Partner and Co-Founder",
        company: "TAKE TWO PRODUCTION, Georgia",
        description: "Worked in fundraising for commercial movie production projects, focusing on brand collaborations and financing.",
        descr2: "Secured funds and managed partnerships for the production of \"Racha Chemi Sikvaruli\" remake and \“Indigo Kids\” TV Series.",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "TAKE TWO",
        type: "Part-Time"
      },
      {
        year: "2013 - 2018",
        position: "Front-End Developer / Graphic Designer",
        company: "Freelance, Worldwide",
        description: "Provided freelance design and development services, specializing in web design and front‑end development.",
        descr2: "Successfully delivered responsive web designs and developed high‑quality graphic assets for various clients.",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "FREELANCE",
        type: "Freelance"
      },
      {
        year: "SEP 2014 - MAR 2016",
        position: "CTO / Marketing and Sales / Founder",
        company: "2Be Production, Georgia",
        description: "Implemented 3D mapping and visualizations for major public displays, collaborating with art directors to produce educational experiences.",
        descr2: "Successfully created an impressive 3D show in Batumi, highlighting the 7 Wonders of the World in an educational and innovative presentation.",
        descr3: "Pioneered new techniques in visual storytelling, enhancing the overall production quality and public engagement.",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "2Be Production",
        type: "Full-Time"
      },
      {
        year: "NOV 2015 - JAN 2017",
        position: "PRODUCER / MARKETING AND SALES | CO-FOUNDER",
        company: "BO Production, Georgia",
        description: "Managed the production of the Christmas Fair City at East Point Shopping Mall, focusing on creating a vibrant and engaging experience for the public.",
        descr2: "Created and managed the Christmas Fair City with attractions and activities, transforming East Point into a major entertainment destination during the festive period.",
        descr3: "Oversaw the creative direction, logistical arrangements, and coordination with stakeholders, ensuring smooth operations.",
        descr4: "",
        descr5: "",
        logo: "/logosWork/boProduction.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "MAY 2014 - MAY 2015",
        position: "PRODUCER | FINANCING",
        company: "Windfor's Communication, Georgia",
        description: "Comercial Shooting (Pre-Set Production)",
        descr2: "Geocell - More 25 ww.marketer.ge/geocell-banaki/",
        descr3: "Archi Tower - http://www.marketer.ge/archi-eu/ Wissol (Horns) - \"Vote!\" - \"Georgian Dream\" (41) - Caucasus Online, Walls",
        descr4: "Sum of Projects Budget: up to 500 000 EURO",
        descr5: "",
        logo: "/logosWork/windfors.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "MAR 14 - DEC 14",
        position: "SALES EXECUTIVE / BUSINESS OFFICER",
        company: "Mentesh Production, Georgia",
        description: "Conduct meetings with sponsorship companies. Offer writing and commercial product placement in the Movie's script.",
        descr2: "Project (movie) budget: 200 000 EUR",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "/logosWork/mentesh.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "SEP 2010 - AUG 2014",
        position: "DIRECTOR / GRAPHIC DESIGNER / FOUNDER",
        company: "LLC \“Smart Network\” and LLC \“Smart Network 1000\”, Georgia",
        description: "Directed the production of marketing collateral for over 600 companies.",
        descr2: "Established a design team and delivered customized promotional materials using industry-standard tools.",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "/logosWork/smartNetwork.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "MAY 2013 - AUG 2016",
        position: "HEAD OF PR AND MARKETING",
        company: "LLC “HUNTER+”, Georgia",
        description: "Conducted market research for sun-protection products, managing relations with enterprises from China, Poland, and Turkey.",
        descr2: "Negotiated deals and maintained marketing efforts that boosted the company\'s visibility in Georgia.",
        descr3: "Worked as Financial Reporting Manager before this role, handling monthly and annual financial reports.",
        descr4: "",
        descr5: "",
        logo: "/logosWork/hunterPlus.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "MAY 2008 - SEP 2010",
        position: "DIRECTOR | FOUNDER",
        company: "FAP - Full AD Partnership, Consulting, Georgia",
        description: "Led technical projects, provided strategic IT direction, and delivered tailored technology solutions for various industries.",
        descr2: "Built robust and scalable infrastructure that supported company growth and ensured successful project delivery.",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "/logosWork/fap.jpeg",
        companyInit: "",
        type: "Part-Time"
      },
      {
        year: "FEB 2009 - MAY 2011 ",
        position: "FULL STACK DEVELOPER",
        company: "Digital Solutions Group, Georgia",
        description: "Worked on front-end and back-end projects, providing development support across various client websites.",
        descr2: "Completed diverse web development projects that met client requirements and improved overall functionality.",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "Digital Solutions",
        type: "Part-Time"
      },
      {
        year: "NOV 2007 - MAR 2008",
        position: "JR. WEB DEVELOPER",
        company: "GlobalWeb, Georgia",
        description: "Assisted in the development of websites, gaining hands-on experience with front-end and back-end technologies.",
        descr2: "Played an active role in troubleshooting and optimizing websites to enhance performance.",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "GlobalWeb",
        type: "Part-Time"
      },
      {
        year: "JUN 2007 - JUL 2008 ",
        position: "MARKETING | DESIGNER | WEB DEVELOPER",
        company: "Novacom, Georgia ",
        description: "",
        descr2: "",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "NOVACOM",
        type: "Part-Time"
      },
      {
        year: "SEP 2006 - MAY 2007 ",
        position: "GRAPHIC DESIGNER / 3D MAPPING",
        company: "WAPMERR-GEORGIA, Georgia",
        description: "",
        descr2: "",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "",
        companyInit: "WAPMERR Georgia",
        type: "Part-Time"
      },
      {
        year: "MAR 2005 - FEB 2006",
        position: "INSURANCE AGENT",
        company: "GPI Holding - VIENNA INSURANCE GROUP",
        description: "GPI HOLDING, Georgia",
        descr2: "",
        descr3: "",
        descr4: "",
        descr5: "",
        logo: "/logosWork/gpih.jpeg",
        companyInit: "",
        type: "Part-Time"
      }
    ];

  return (
    <section id="career" className="w-full py-20 bg-gray-100 text-center">
      <motion.div
        className="container mx-auto px-6 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
              initial={{ opacity: 0.1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
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
                  <span className='font-bold text-sm'>ROLE:</span> {item.description}
                </p>
                <p className="text-base text-gray-600 mt-2">
                  <span className='font-bold text-sm'>ACCOMPLISHMENTS:</span> {item.descr2}
                </p>
                <p className="text-base text-gray-600 mt-2">{item.descr3}</p>
                <p className="text-base text-gray-600 mt-2">{item.descr4}</p>
                <p className="text-base text-gray-600 mt-2">{item.descr5}</p>
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
