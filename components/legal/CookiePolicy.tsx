"use client"

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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

const CookiePolicy: React.FC = () => {
  const currentDate = getCurrentDate();

  const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Your Address';
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'Your Email';
  const companyWebsite = process.env.NEXT_PUBLIC_COMPANY_WEBSITE || 'Your Website';

  const [cookies, setCookies] = useState<string[]>([]);

  useEffect(() => {
    const allCookies = Object.keys(Cookies.get()) as string[];
    setCookies(allCookies);
  }, []);

  return (
  <div className="w-full max-w-7xl flex flex-col justify-center items-start py-20 sm:px-4 px-4 relative  scroll-mt-2 snap-start scroll-smooth md:scroll-auto mt-20">

    <div className="w-full mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-4">
          Effective Date: <span className='capitalize'>{currentDate}</span> <br />
          Last Updated: <span className='capitalize'>{currentDate}</span>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          Our website, {companyWebsite} (hereinafter: “the website”) uses cookies and other related technologies (for convenience all technologies are referred to as “cookies”). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.
        </p>

        <p className="mb-4">
          This Cookie Policy explains how our website uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control their use.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p className="mb-4">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How do we use cookies?</h2>
        <p className="mb-4">
          We use cookies for several reasons. Some cookies are required for technical reasons for our websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our websites for analytics and other purposes. The specific types of cookies served through our website and the purposes they perform are described below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
        <p className="mb-4">
          We use both first and third-party cookies for several reasons. The specific types of first and third-party cookies served through our websites and the purposes they perform are described below:
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies Set by Our Website</h2>
        <p className="mb-4">
          Below is a list of the cookies set by our website:
        </p>

        <ul className="w-fit list-disc px-8 mb-2 font-light bg-owlBrown/10 py-4 rounded-xl shadow-lg">
          {cookies.map((cookie, index) => (
            <li key={index} className="mb-2">{cookie}</li>
          ))}
          
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How can I control cookies?</h2>
        <div className="mb-6">
      <p className="mb-4">
        You can change your cookie preferences any time by clicking the above link. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away.
      </p>
      <h5 className="text-lg font-semibold mb-4">Delete cookies from your browser</h5>
      <ul className="w-fit list-disc px-8 mb-4 font-light bg-owlBrown/10 py-4 rounded-xl shadow-lg">
        <li>
          <Link href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-owlBrown underline" aria-label="Delete cookies in Chrome">Chrome
          </Link>
        </li>
        <li>
          <Link href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-owlBrown underline" aria-label="Delete cookies in Safari">Safari
          </Link>
        </li>
        <li>
          <Link href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US" target="_blank" rel="noopener noreferrer" className="text-owlBrown underline" aria-label="Delete cookies in Firefox">Firefox
          </Link>
        </li>
        <li>
          <Link href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noopener noreferrer" className="text-owlBrown underline" aria-label="Delete cookies in Internet Explorer">Internet Explorer
          </Link>
        </li>
      </ul>
      <p className="mb-4">
        If you are using any other web browser, please visit your browser&apos;s official support documents.
      </p>
    </div>

        <p className="mb-4">
          <strong>Email:</strong> {companyEmail}<br />
          <strong>Address:</strong> {companyAddress}
        </p>

        <p className="mb-4">
          This Cookie Policy may be updated from time to time to reflect changes in technology, law, or our practices. We encourage you to review this policy periodically to stay informed about our use of cookies.
        </p>

    </div>

  </div>
  );
};

export default CookiePolicy;








