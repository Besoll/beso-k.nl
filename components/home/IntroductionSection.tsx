"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import FormSection from './FormSection';
import { formItems } from '@/data';

const IntroductionSection: FC = () => {
  return (
    <section id="introduction" className="w-full py-20 bg-gradient-to-r from-owlGreen-400 to-owlGreen-600 text-white relative flex justify-center items-center gap-4 flex-col">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.div
            className="w-full md:w-1/3 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/me.webp"
              alt="Profile picture of Beso Kavzharadze"
              width={400}
              height={400}
              className="rounded-full border-8 border-white shadow-xl"
            />
            <motion.div
              className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-t from-owlGreen-700 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
            ></motion.div>
          </motion.div>
          <motion.div className="w-full md:w-2/3">
            <motion.h2
              className="text-5xl font-bold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Beso Kavzharadze
            </motion.h2>
            <motion.p
              className="text-2xl font-semibold mt-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full Stack Developer & Creative Technologist
            </motion.p>
            <motion.p
              className="text-lg mt-6 text-gray-200"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              I'm a highly skilled developer with expertise across front-end, back-end, and creative digital solutions. Passionate about creating engaging user experiences and pushing the boundaries of digital innovation. I take pride in delivering results that align perfectly with business objectives, blending technology, creativity, and strategy.
            </motion.p>
            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a href="https://linkedin.com/in/besik-kavzharadze" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/besoll" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                <FaGithub size={30} />
              </a>
              <a href="mailto:beso@beso-k.nl" className="hover:text-yellow-300 transition-colors duration-300">
                <FaEnvelope size={30} />
              </a>
              <a href="https://maps.app.goo.gl/1nzw7xd5uLmEN82G6" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
                <FaMapMarkerAlt size={30} />
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <span className="text-lg">No visa is required. Active Work Permit in the Netherlands</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <span className="text-lg">High Skilled Developer (30% ruling till 2029)</span>
            </motion.div>
            <motion.div
              className="flex gap-6 items-center mt-12 bg-gray-800 rounded-lg p-6 shadow-lg relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.6, ease: 'easeInOut' } }}
            >
              <FaLightbulb size={40} className="text-owlGreen-500" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-owlGreen-500">Passion for Innovation</h3>
                <p className="text-lg mt-2 text-gray-300 leading-relaxed">
                  Always exploring the latest technologies and creative techniques to deliver state-of-the-art solutions for the digital world.
                </p>
              </div>
              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-transparent to-yellow-300 opacity-0 group-hover:opacity-30 rounded-lg pointer-events-none"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* <FormSection formItems={formItems[0]} /> */}
    </section>
  );
};

export default IntroductionSection;
