'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dCard';
import { FaCode, FaPaintBrush, FaProjectDiagram, FaServer, FaCogs, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';

const SkillsSection: FC = () => {
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched(true);
    setTimeout(() => setTouched(false), 1000); // Reset the touched state after 1 second
  };

  const skills = [
    {
      icon: <FaCode className="w-16 h-16 text-owlGreen-500" />,
      title: 'Technical Skills',
      description: 'Expert in JavaScript (Node.js, ReactJS), PHP, HTML, CSS, SQL, XML, Front-End & Back-End frameworks (ReactJS, Next.js, TailwindCSS, Laravel, Express.js). Skilled in cloud platforms like AWS, Vercel, and Google Cloud.',
    },
    {
      icon: <FaPaintBrush className="w-16 h-16 text-owlGreen-500" />,
      title: 'Creative Skills',
      description: 'Experienced in Adobe Creative Suite (Photoshop, Illustrator, After Effects), Figma, CorelDRAW, DaVinci Resolve Studio. Skilled in web and graphic design, with a knack for creating visually appealing digital content.',
    },
    {
      icon: <FaProjectDiagram className="w-16 h-16 text-owlGreen-500" />,
      title: 'Project Management',
      description: 'Proficient in Agile methodologies, strategic planning, resource and budget management, and team empowerment. Focused on delivery with a creative problem-solving approach.',
    },
    {
      icon: <FaServer className="w-16 h-16 text-owlGreen-500" />,
      title: 'DevOps & Cloud',
      description: 'Experienced with DevOps tools like GitHub, Jenkins, Docker, Terraform, and cloud services like AWS (EC2, S3, RDS), Vercel, and Google Cloud. Focus on scalable and efficient product delivery.',
    },
    {
      icon: <FaCogs className="w-16 h-16 text-owlGreen-500" />,
      title: 'Automation & AI',
      description: 'Expertise in Generative AI, automation solutions, and AI-driven marketplace listings. Skilled in building automated systems for improved scalability and performance.',
    },
    {
      icon: <FaUserTie className="w-16 h-16 text-owlGreen-500" />,
      title: 'Leadership & Strategy',
      description: 'Strong background in entrepreneurial leadership, strategic planning, and stakeholder management. Proven ability to inspire teams and align cross-functional synergies for business growth.',
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-20 bg-gradient-to-b from-white to-white text-center overflow-hidden"
    >
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
                ? { x: ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%', '105%', '110%', '115%', '120%', '125%', '130%', '135%', '140%', '145%', '150%', '155%', '160%', '165%', '170%', '175%', '180%', '185%', '190%', '195%', '200%', '205%', '210%', '215%', '220%', '225%', '230%', '235%', '240%', '245%', '250%'], translate: -1500, transition: { x: ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%', '105%', '110%', '115%', '120%', '125%', '130%', '135%', '140%', '145%', '150%', '155%', '160%', '165%', '170%', '175%', '180%', '185%', '190%', '195%', '200%', '205%', '210%', '215%', '220%', '225%', '230%', '235%', '240%', '245%', '250%'], duration: 4800000, ease: 'linear' }, transitionEnd: { x: 0 } }
                : {}
            }
            transition={{ duration: 60, ease: ['easeIn', 'easeOut', 'easeInOut'] }}
          >
            <Image
              src='/Andri-Space-ship-1.webp'
              alt='Andri Space Ship lego 1'
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
              <div className='bg-white text-owlGreen-800 font-bold p-4 rounded-full shadow-lg'>
                🚀 Woosh!
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="container mx-auto p-6 mt-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-owlGreen-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-700 font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I bring a diverse set of skills to the table, spanning technical expertise, creative design, project management, DevOps, AI integration, and leadership. Here are the key areas where I excel:
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
          {skills.map((skill, index) => (
            <CardContainer key={index} className="inter-var hover:z-50 shadow-lg rounded-xl flex 1 group">
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                className='relative'
              >
                <CardBody className="bg-owlGreen-100 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border min-h-[550px] flex justify-center items-center flex-col">
                  <CardItem
                    translateZ="50"
                    className="px-4 text-2xl font-bold text-neutral-600"
                  >
                    {skill.title}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={30}
                    rotateZ={-10}
                    className="w-full mt-4 flex justify-center"
                  >
                    {skill.icon}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="px-4 text-neutral-500 font-regular text-lg max-w-sm mt-12"
                  >
                    {skill.description}
                  </CardItem>
                </CardBody>
                <motion.div
                  className='absolute -inset-1 bg-emerald-500 opacity-0 blur-md rounded-lg'
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </motion.div>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
