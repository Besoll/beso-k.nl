'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const AboutMe: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = containerRef.current;
        const moveX = ((clientX / offsetWidth) - 0.5) * 30;
        const moveY = ((clientY / offsetHeight) - 0.5) * 30;
        containerRef.current.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="w-full py-20 bg-white text-center">
      <motion.div
        ref={containerRef}
        className="container mx-auto p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        {/* Sparkle Animation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <FaStar className="w-12 h-12 text-owlGreen-600 animate-spin-slow" />
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-owlGreen-700"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I am Beso Kavzharadze, a dynamic professional with a passion for technology, creative services, and digital marketing. I thrive in fast-paced environments where innovation and creativity are encouraged. With a strong entrepreneurial spirit, I have successfully founded and managed multiple ventures, integrating technical and creative solutions to drive impactful results. My goal is to contribute to growth-oriented teams, balancing strategic thinking with practical execution, while fostering a culture of collaboration and innovation.
        </motion.p>
        {/* Rotating Floating Quote */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ y: 10 }}
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <motion.div
            className="bg-owlGreen-200 p-8 rounded-lg shadow-lg transform-gpu"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-owlGreen-700 font-semibold text-2xl">“Let's innovate together and build a better future.”</p>
          </motion.div>
        </motion.div>
        {/* Parallax Scrolling Elements */}
        <motion.div
          className="absolute top-0 left-0 w-[20%] h-[20%] bg-gradient-to-r from-owlGreen-400 to-owlGreen-600 rounded-full opacity-40 blur-2xl pointer-events-none"
          initial={{ y: -100 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-[15%] h-[15%] bg-gradient-to-l from-owlGreen-400 to-owlGreen-600 rounded-full opacity-30 blur-2xl pointer-events-none"
          initial={{ y: 100 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
