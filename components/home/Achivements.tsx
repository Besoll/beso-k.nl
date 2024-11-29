"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaMedal, FaTrophy, FaRocket, FaLaptopCode, FaUsers } from 'react-icons/fa';

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
  highlight: boolean;
}

const achievementsData: Achievement[] = [
  {
    year: "2024",
    title: "WebSummit ALPHA Startup",
    description: "Showcased OwlWeb as an ALPHA startup at WebSummit 2024 Lisbon, generating 87 leads, securing 24 clients, and attracting an investor deal.",
    icon: <FaAward size={50} className="text-yellow-400" />,
    highlight: true,
  },
  {
    year: "2014",
    title: "Co-founded Creative Agency",
    description: "Co-founded a creative agency focused on delivering high-quality web and graphic design services.",
    icon: <FaUsers size={50} className="text-blue-400" />,
    highlight: true,
  },
  {
    year: "2007",
    title: "Founded Marketing Consulting Agency",
    description: "Started my own small marketing agency, focusing on local businesses and creative projects.",
    icon: <FaRocket size={50} className="text-red-400" />,
    highlight: true,
  },
  {
    year: "2021",
    title: "Developed AI-driven Marketing Tool",
    description: "Developed an AI-driven marketing automation tool that improved lead conversion rates by 40%.",
    icon: <FaLaptopCode size={30} className="text-blue-500" />,
    highlight: false,
  },
  {
    year: "2011",
    title: "Lead Designer for Tech Conference",
    description: "Led the design of promotional materials and website for a major regional tech conference.",
    icon: <FaAward size={30} className="text-purple-400" />,
    highlight: false,
  },
  {
    year: "2010",
    title: "Full Stack Developer Role",
    description: "Joined a startup as a Full Stack Developer, working with both front-end and back-end technologies.",
    icon: <FaTrophy size={30} className="text-blue-400" />,
    highlight: false,
  },
  {
    year: "2005",
    title: "First Freelance Project",
    description: "Completed the first freelance web project for a local business, building a basic website with HTML and CSS.",
    icon: <FaMedal size={30} className="text-green-400" />,
    highlight: false,
  },
  {
    year: "2003",
    title: "First Internship as Junior Developer",
    description: "Gained real-world experience working on small-scale projects in a local tech firm.",
    icon: <FaLaptopCode size={30} className="text-blue-400" />,
    highlight: false,
  },
  {
    year: "2000",
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript, laying the foundation for a career in web development.",
    icon: <FaAward size={30} className="text-yellow-400" />,
    highlight: false,
  },
];

const AchievementsTimeline: FC = () => {
  return (
    <section id="achievements-timeline" className="w-full py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-owlGreen-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Achievements & Key Milestones
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center text-gray-400 mt-4 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Follow along the milestones of my professional journey from the early beginnings to the present day.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-lg shadow-lg cursor-pointer ${achievement.highlight ? 'bg-owlGreen-700 border-2 border-owlGreen-400' : 'bg-gray-800 border-l-4 border-owlGreen-500'}`}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, 1, -1, 1, 0], 
                transition: { duration: 0.5, ease: "easeInOut" },
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)",
                borderRadius: ['10%', '20%', '15%', '10%']
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeInOut' }}
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gray-700 rounded-full shadow-inner">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-owlGreen-400">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {achievement.year}
              </p>
              <p className="text-base text-gray-300 mt-3 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;

