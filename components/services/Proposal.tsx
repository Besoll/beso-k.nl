"use client";

// src/components/Proposal.tsx
import { proposalData } from "@/data";
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import animationData from '@/data/Proposal.json'; // replace with your Lottie file

const Proposal = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-MainBG text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">{proposalData.title}</h1>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-6 text-xl"
      >
        {proposalData.greeting}
      </motion.p>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mb-6"
      >
        {proposalData.intro}
      </motion.p>

      {/* Sections */}
      {proposalData.sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          
          {/* Package Features */}
          {section.packages && (
            <div className="space-y-6">
              {section.packages.map((pkg, i) => (
                <div key={i} className="border border-gray-300 p-4 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-lg mb-2">{pkg.description}</p>
                  <p className="font-bold text-yellow-400 mb-4">{pkg.price}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="text-lg">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Other Features */}
          {section.features && (
            <ul className="list-disc list-inside space-y-2 mb-4">
              {section.features.map((feature, i) => (
                <li key={i} className="text-lg">{feature}</li>
              ))}
            </ul>
          )}

          

          {/* Pricing (Single String) */}
          {typeof section.pricing === "string" && (
            <p className="font-bold">{section.pricing}</p>
          )}
          
          {/* Pricing (Array) */}
          {Array.isArray(section.pricing) && (
            <ul className="list-disc list-inside space-y-2">
              {section.pricing.map((price, i) => (
                <li key={i} className="text-lg">{price}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}

      {/* Conclusion */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="mb-6"
      >
        {proposalData.conclusion}
      </motion.p>

      {/* Sign off */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.7 }}
        className="font-bold"
      >
        {proposalData.signoff}
      </motion.p>

      {/* Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <Lottie options={lottieOptions} height={300} width={300} />
      </motion.div>
    </div>
  );
};

export default Proposal;
