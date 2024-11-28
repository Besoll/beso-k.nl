import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

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

const Disclaimer: NextPage = () => {

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
            <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

            <p className="mb-4">
                <strong>{companyName}</strong> ("{companyNameInit}") operates the website <Link href={companyWebsite} aria-label='navigate to website' className="text-blue-500">{companyWebsite}</Link> (the "Website"). The information provided on this Website is for general informational purposes only.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Accuracy of Information</h2>
            <p className="mb-4">
                While we strive to provide accurate and up-to-date information, {companyNameInit} makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
                In no event will {companyNameInit} be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
            <p className="mb-4">
                Through this Website, you may be able to link to other websites that are not under the control of {companyNameInit}. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Advice</h2>
            <p className="mb-4">
                The information on this Website is provided for general informational purposes and should not be construed as professional advice. If you require advice in relation to any legal, financial, or medical matter, you should consult an appropriate professional.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to the Disclaimer</h2>
            <p className="mb-4">
                {companyNameInit} reserves the right to make changes to this Disclaimer at any time. Any changes will be posted on this page. Your continued use of the Website after any such changes are posted will be considered acceptance of those changes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">
                If you have any questions about this Disclaimer, you can contact us:
            </p>
            <ul className="list-disc pl-8">
                <li className="mb-2"><strong>Address:</strong> {companyAddress}</li>
                <li className="mb-2"><strong>Phone:</strong> {companyPhone}</li>
                <li className="mb-2"><strong>Email:</strong> <Link href={`mailto:${companyEmail}`} arial-label='send email to us' className="text-blue-500">{companyEmail}</Link></li>
            </ul>

            <p className="text-sm text-gray-500 mt-6">
                Company VAT Number: {companyVAT} <br />
                Company Registration (KVK) Number: {companyKVK}
            </p>

            <p className="text-sm text-gray-500 mt-6">
                Last updated: {currentDate}
            </p>
        </div>
    </div>
    );
};

export default Disclaimer;

