"use client";
import { getDeal } from "@/data";
import { motion } from "framer-motion";
import { FaWordpress, FaShopify, FaLaptopCode } from "react-icons/fa";
import { FiFacebook, FiTarget, FiGlobe } from "react-icons/fi";
import Link from "next/link";

// Fallback icons for remaining products, including specific icons for WordPress, Shopify, and Custom Website Development
const defaultIcons = [FaWordpress, FaShopify, FaLaptopCode, FiFacebook, FiTarget, FiGlobe];

export default function GetDeal() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8" style={{ backgroundColor: "#0f67ae" }}>
      <h1 className="text-3xl font-bold text-center text-white mb-8">{getDeal.headline}</h1>

      {/* Section for About Our Services */}
      <div className="mb-12 text-center px-6 max-w-4xl text-white space-y-4">
        <h2 className="text-2xl font-semibold text-white mb-4">{getDeal.descriptionTitle}</h2>
        {getDeal.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Products Section with Dynamic Icons and Discover More Links */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mb-12 place-items-center">
        {getDeal.products.map((product, index) => {
          const Icon = defaultIcons[index % defaultIcons.length]; // Cycles through icons
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg max-w-xs w-full h-full bg-white/10 md:min-h-[400px]"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-4">
                <Icon className="text-white w-8 h-8" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-4 text-center">{product.name}</h2>
              <p className="text-gray-100 text-center mb-4">{product.description}</p>
              <p className="text-white font-bold text-center mb-2">
                {product.priceType}: <span className="text-yellow-400">{product.price}</span>
              </p>
              {product.discount && <p className="text-gray-100 mb-2">{product.discount}</p>}
              <ul className="text-gray-100 list-disc list-inside text-sm mt-2 space-y-1">
                {product.extras && product.extras.map((extra, i) => (
                  <li key={i}>{extra}</li>
                ))}
              </ul>
              {/* Discover More Button for products with discoverMoreLink */}
              {product.discoverMoreLink && (
                <Link href={product.discoverMoreLink} className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Discover More
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Highlights Section */}
      <div className="relative bg-gradient-to-r to-indigo-100 text-white p-8 rounded-lg shadow-xl w-full max-w-4xl mt-8">
        <h3 className="text-2xl font-semibold text-center mb-4">{getDeal.highlightsTitle}</h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 text-lg"
        >
          {getDeal.highlights.map((highlight, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <p className="bg-MainColor/30 text-blue-100 p-2 rounded-lg shadow-sm cursor-pointer">{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      
    </div>
  );
}
