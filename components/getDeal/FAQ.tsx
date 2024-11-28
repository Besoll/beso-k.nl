import { getDeal } from "@/data";
import { FaWordpress, FaShopify, FaLaptopCode } from "react-icons/fa";
import { FiFacebook, FiTarget, FiGlobe } from "react-icons/fi";

// Fallback icons for remaining products, including specific icons for WordPress, Shopify, and Custom Website Development
const defaultIcons = [FaWordpress, FaShopify, FaLaptopCode, FiFacebook, FiTarget, FiGlobe];

export default function GetDeal() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-MainBG">
      
      {/* FAQ Section */}
      <div className="max-w-4xl w-full px-6">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">{getDeal.faqTitle}</h3>
        <ul className="space-y-4">
          {getDeal.faq.map((item, index) => (
            <li key={index} className="bg-white/10 p-4 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">{item.question}</h4>
              <p className="text-gray-100">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
