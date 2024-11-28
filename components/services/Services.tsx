"use client"
// src/components/Services.tsx
import { servicesData, serviceHead } from '@/data/index';
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-MainBG text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">{serviceHead}</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => {
          const lottieOptions = {
            loop: true,
            autoplay: true,
            animationData: require(`@/data/${service.lottieFile}`), // Dynamically load Lottie animation
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: service.id * 0.2 }}
              className="bg-white text-MainBG p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Lottie options={lottieOptions} height={150} width={200} />
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
