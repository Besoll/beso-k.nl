'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection: FC = () => {
  const projects = [
    {
      title: 'Creative Portfolio Website',
      description: 'Designed and developed a personal portfolio using Next.js, TailwindCSS, and Framer Motion to create an engaging and dynamic user experience.',
      image: '/projects/portfolio.webp',
    },
    {
      title: 'E-commerce Platform',
      description: 'Built a scalable e-commerce platform with integrated payment gateways, cart management, and personalized product recommendations.',
      image: '/projects/ecommerce.webp',
    },
    {
      title: 'AI-powered Chatbot',
      description: 'Created an AI chatbot using NLP libraries to enhance customer support for an online marketplace, reducing support workload by 40%.',
      image: '/projects/chatbot.webp',
    },
  ];

  return (
    <section id="projects" className="w-screen h-screen bg-gradient-to-b from-black to-owlGreen-900 text-center overflow-hidden relative">
      <div className="container mx-auto h-full p-6 flex flex-col justify-center items-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Explore some of the standout projects that I have worked on, showcasing my expertise in web development, e-commerce, and AI-driven solutions.
        </motion.p>
        <div className="flex gap-12 overflow-x-scroll h-[70%] w-full snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="snap-center flex-shrink-0 w-[350px] h-[450px] bg-gradient-to-br from-blue-700 to-purple-600 p-6 rounded-3xl shadow-xl transform-gpu hover:scale-110 transition duration-700 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              <div className="relative w-full h-[200px] mb-4">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-md"
                /> */}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-md text-gray-100">{project.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Parallax Background Animation */}
        <motion.div
          className="absolute top-0 left-0 w-[30%] h-[30%] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-40 blur-3xl pointer-events-none animate-pulse"
          initial={{ y: -100 }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-[25%] h-[25%] bg-gradient-to-l from-pink-500 to-blue-500 rounded-full opacity-30 blur-3xl pointer-events-none animate-pulse"
          initial={{ y: 100 }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
