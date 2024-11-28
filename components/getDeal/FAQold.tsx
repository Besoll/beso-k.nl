"use client"
import { useState } from "react";
import { getDeal } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8" >
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        {getDeal.faqTitle}
      </h2>

      <div className="w-full max-w-7xl px-6 space-y-4" >
        {getDeal.faq.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer w-full"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
              {openIndex === index ? (
                <FiChevronUp className="text-indigo-500 w-6 h-6" />
              ) : (
                <FiChevronDown className="text-indigo-500 w-6 h-6" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}