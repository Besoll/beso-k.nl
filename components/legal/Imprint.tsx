import React from 'react';
import { NextPage } from 'next';
// import Image from 'next/image';

// Helper function to format the current date
const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('nl-NL', options);
};

const Imprint: NextPage = () => {

    const currentDate = getCurrentDate();
    // Fetch environment variables
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company';
    const companyNameInit = process.env.NEXT_PUBLIC_COMPANY_NAME_INIT || 'Your Initials';
    const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Your Address';
    const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || 'Your Phone';
    const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'Your Email';
    const companyWebsite = process.env.NEXT_PUBLIC_COMPANY_WEBSITE || 'Your Website';
    const companyVAT = process.env.NEXT_PUBLIC_COMPANY_VAT || 'Legal VAT';
    const companyKVK = process.env.NEXT_PUBLIC_COMPANY_KVK || 'Legal KVK';
  
return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-start py-20 sm:px-4 px-4 relative  scroll-mt-2 snap-start scroll-smooth md:scroll-auto mt-20">
        <div className="w-full mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Imprint</h1>
          <p className="mb-4">
            <strong>Company Name:</strong> {companyName}
          </p>
          <p className="mb-4">
            <strong>Owner Initials:</strong> {companyNameInit}
          </p>
          <p className="mb-4">
            <strong>Address:</strong> {companyAddress}
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> {companyPhone}
          </p>
          <p className="mb-4">
            <strong>Website:</strong> {companyWebsite}
          </p>
          <p className="mb-4">
            <strong>Email:</strong> {companyEmail}
          </p>
          <p className="mb-4">
            <strong>VAT:</strong> {companyVAT}
          </p>
          <p className="mb-4">
            <strong>Chamber of Commerce (KVK):</strong> {companyKVK}
          </p>
          <p className="mb-4">
            <strong>The name of our supervisory authority is:</strong> {' '} No
          </p>
          <p className="mb-4">
            <strong>We display services or products on our site for which registration with the following professional association is required:</strong>  {' '}
            No <br />
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
          {/* <p className="text-sm text-gray-500 mt-6">
            Logo:
          </p>
          <Image 
            src="/logo/logo.png"
            alt="Buurmann en Buurmann logo"
            width={1639}
            height={491}
            className='w-full max-w-[400px] h-auto
                  transition duration-300 ease-in-out cursor-pointer 
                  hover:scale-110 hover:skew-y-1 hover:rotate-1'
          />           */}
          <p className="text-sm text-gray-500 mt-6">
            Last updated: {currentDate}
          </p>
        </div>
      </div>
    );
  };
  
  export default Imprint;

