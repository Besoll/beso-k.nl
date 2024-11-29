"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const WebSummitFooter = dynamic(() => import('@/components/home/WebSummitFooter'));
const WebCyberFooter = dynamic(() => import('@/components/home/WebCyberFooter'));

const Slider: FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setIsPaused(false);
    } else {
      setExpandedIndex(index);
      setIsPaused(true);
    }
  };

  const handleOutsideClick = () => {
    setExpandedIndex(null);
    setIsPaused(false);
  };

  return (
    <section className="w-full py-20 relative">
      <motion.div
        className={`slider-wrapper max-w-7xl mx-auto relative overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* Overlay for closing expanded view */}
        {expandedIndex !== null && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50 cursor-pointer"
            onClick={handleOutsideClick}
          ></div>
        )}

        <motion.div
          className="slider-track flex space-x-6 cursor-grab relative z-20"
          drag={!isPaused ? "x" : false}
          dragConstraints={{ left: -600, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={!isPaused ? { x: [0, -300, -600, 0] } : {}}
          transition={!isPaused ? { duration: 15, repeat: Infinity, ease: 'linear' } : {}}
        >
          {[WebSummitFooter, WebCyberFooter, WebSummitFooter, WebCyberFooter].map((Component, index) => (
            <motion.div
              key={index}
              className={`slider-item p-10 rounded-lg shadow-lg flex items-center justify-center w-full min-w-[300px] md:min-w-[500px] transition-transform duration-500 ease-in-out ${
                expandedIndex === index ? 'scale-[1.5] z-30' : ''
              }`}
              whileHover={{ scale: expandedIndex === null ? 1.05 : 1 }}
              onClick={() => handleClick(index)}
            >
              <Component />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Slider;
