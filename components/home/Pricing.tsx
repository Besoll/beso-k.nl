"use client"
// PricingSection.tsx
import { FC } from "react";
import { motion } from "framer-motion";
import { FaWordpress, FaShopify, FaLaptopCode } from "react-icons/fa";
import { pricingSectionData } from "@/data";
import Link from "next/link";

const iconMap = {
  FaWordpress: FaWordpress,
  FaShopify: FaShopify,
  FaLaptopCode: FaLaptopCode,
};

const PricingSection: FC = () => {
  const { sectionTitle, buttonLabels, pricingData } = pricingSectionData;

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">{sectionTitle}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map(({ id, title, price, icon, features, link }) => {
            const IconComponent = iconMap[icon as keyof typeof iconMap];
            return (
              <motion.div
                key={id}
                className="bg-white shadow-lg rounded-lg p-8 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent className="text-5xl mx-auto text-MainBG mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-lg font-semibold mb-6">{price}</p>
                <ul className="text-left text-sm mb-8">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="flex justify-center gap-4">
                  {/* <a
                    href={link}
                    className="text-MainBG hover:text-blue-800 underline"
                  >
                    {buttonLabels.discoverMore}
                  </a> */}
                  <Link
                    href={link}
                    className="px-4 py-2 bg-MainBG text-white rounded hover:bg-blue-800 transition-colors"
                    aria-label={title}
                  >
                    {buttonLabels.startNow}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
