import React from 'react';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

// Helper function to format the current date
const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const PrivacyPolicy: React.FC = () => {
  const currentDate = getCurrentDate();

  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company';
  const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Your Address';
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || 'Your Phone';
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'Your Email';
  const companyWebsite = process.env.NEXT_PUBLIC_COMPANY_WEBSITE || 'Your Website';

  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-start py-20 sm:px-4 px-4 relative  scroll-mt-2 snap-start scroll-smooth md:scroll-auto mt-20">
        <div className="w-full mx-auto bg-white p-8 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">
                Privacy Policy
            </h1>

            <p className='mb-4 text-right font-light'>Effective Date: {currentDate}</p>
            <p className="mb-6 font-light">
                This privacy statement was last updated on {currentDate} and the mostly applies to citizens and legal permanent residents of the European Economic Area and Switzerland
                <br />
            </p>

            <p className='mb-4'>
                In this privacy statement we explain what we do with the data we obtain about you via {companyWebsite} . We recommend that you read this statement carefully. In our processing we comply with the requirements of privacy legislation. This means, among other things, that:
            </p>

            <ol className='list-disc mb-4 pl-6'>
                <li>
                    We clearly state for what purposes we process personal data. We do this via this privacy statement;
                </li>
                <li>
                    We aim to limit our collection of personal data to only the personal data necessary for legitimate purposes;                    
                </li>
                <li>
                    We first ask you for your express consent to process your personal data in cases where your consent is required;                    
                </li>
                <li>
                    We take appropriate security measures to protect your personal data and also require this from parties that process personal data on our behalf;                    
                </li>
                <li>
                    We respect your right to request access to, correction or deletion of your personal data.                    
                </li>
            </ol>

            <p className='mb-4'>
                If you have any questions or would like to know exactly what data we store about you, please contact us.
            </p>

            <p className="mb-4">
                This Privacy Policy describes the policies of

                {companyWebsite} - {companyName}, {companyAddress}, email: {companyEmail}, phone: {companyPhone} on the collection, use and disclosure of your information that we collect when you use our website -{companyWebsite} . (the “Service”). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.
            </p>

            <p className="mb-4">
                We may modify this Privacy Policy at any time without any prior notice to you and will post the revised
                Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted on the Service, and your continued access or use of the Service after such time
                will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.
            </p>

            <ol className="list-decimal pl-6 mb-6">
                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Purpose, data - We Collect:
                    </h2>
                    <p className="mb-2">
                        We may receive or collect personal information for a number of purposes relating to our business operations, including the following:
                    </p>
                    <ol className="w-fit list-disc px-8 mb-2 font-light bg-owlBrown/10 py-4 rounded-xl shadow-lg">
                        <li>Name - A first and last name, company name</li>
                        <li>Email</li>
                        <li>Mobile - A telephone number</li>
                        <li>
                            Address - A home or other physical address, including street name and name of a city or town
                        </li>
                        <li>Geo-location data</li>
                        <li>IP Address</li>
                    </ol>
                    <p className="mb-2">
                        We may receive or collect personal information for a number of purposes relating to our business operations, including the following: :
                    </p>
                    <Link href='https://cookiedatabase.org/legal-bases/#agreement' aria-label='navigate to cookiedatabase - to see how we use terms and cookies' className="mb-2 text-owlBrown font-light underline flex flex-row gap-1 justify-start items-center pl-8">
                        <FaLink />
                        <p>
                            It is necessary for the performance of a contract or for procedures preliminary to a contract to which the data subject is a party. 
                        </p>                        
                    </Link>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        How We Use Your Information:
                    </h2>
                    <p className="mb-2">
                        We will use the information that we collect about you for the following purposes:
                    </p>
                    <ol className="w-fit list-disc px-8 mb-2 font-light bg-owlBrown/10 py-4 rounded-xl shadow-lg">
                        <li>Marketing/Promotional</li>
                        <li>Targeted advertising</li>
                    </ol>
                    <p className="mb-4">
                        If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which you grant consent unless we are required to do otherwise by law.
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Retention Of Your Information:
                    </h2>
                    <p className="mb-4">
                        We will retain your personal information with us for 90 days to 2 years after users terminate their accounts or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Your Rights:
                    </h2>
                    <p className="mb-4">
                        Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at info@owlweb.nl. We will respond to your request in accordance with applicable law.
                    </p>
                    <p className="mb-4">
                        Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Cookies Etc.
                    </h2>
                    <p className="mb-4">
                        To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our <Link href={`${companyWebsite}/cookie-policy`} aria-label="View Cookie Policy" className="text-owlBrown underline">Cookie Policy. </Link>
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Security:
                    </h2>
                    <p className="mb-4">
                        The security of your information is important to us and we will use reasonable security measures
                        to prevent the loss, misuse, or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Third-Party Links & Use Of Your Information:
                    </h2>
                    <p className="mb-4">
                        Our Service may contain links to other websites
                        that are not operated by us. This Privacy Policy
                        does not address the privacy policy and other
                        practices of any third parties, including any
                        third party operating any website or service
                        that may be accessible via a link on the
                        Service. We strongly advise you to review the
                        privacy policy of every site you visit. We have
                        no control over and assume no responsibility for
                        the content, privacy policies, or practices of
                        any third-party sites or services.
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Filing a complaint
                    </h2>
                    <p className="mb-4">
                        If you are not satisfied with the way in which we handle (a complaint about) the processing of your personal data, you have the right to file a complaint with the Dutch Data Protection Authority.
                    </p>
                </li>

                <li className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Grievance / Data Protection Officer:
                    </h2>
                    <p className="mb-4">
                        If you have any queries or concerns about the
                        processing of your information that is available
                        with us, you may email our Grievance Officer at
                        {companyWebsite} - {companyName}, {companyAddress}, email: {companyEmail}, phone: {companyPhone}.
                        We will address your concerns in accordance with applicable law.
                    </p>
                </li>
            </ol>            
        </div>
    </div>
  );
};

export default PrivacyPolicy;

