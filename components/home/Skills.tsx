'use client';

import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaProjectDiagram, FaServer, FaCogs, FaUserTie } from 'react-icons/fa';

const SkillsSection: FC = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="relative w-screen h-screen bg-gradient-to-b from-owlGreen-900 to-black text-center overflow-hidden">
      <div className="container mx-auto h-full p-6 flex flex-col justify-center items-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I bring a diverse set of skills to the table, spanning technical expertise, creative design, project management, DevOps, AI integration, and leadership. Here are the key areas where I excel:
        </motion.p>
        <motion.div
          className="flex gap-16 w-full h-[70%] overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          whileTap={{ cursor: 'grabbing' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="snap-center min-w-[400px] h-[450px] p-10 bg-gradient-to-tr from-owlGreen-500 to-blue-700 text-white rounded-[10%] shadow-xl transform-gpu hover:scale-110 hover:skew-y-3 transition duration-700 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              <div className="flex justify-center mb-6">{skill.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{skill.title}</h3>
              <p className="text-lg text-gray-100">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Parallax Background Animation */}
        <motion.div
          className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50 blur-3xl pointer-events-none animate-pulse"
          initial={{ y: -100 }}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-[35%] h-[35%] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full opacity-40 blur-3xl pointer-events-none animate-pulse"
          initial={{ y: 100 }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
