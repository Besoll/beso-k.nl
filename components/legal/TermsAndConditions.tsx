import { NextPage } from 'next';
import Link from 'next/link';

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

const TermsAndConditions: NextPage = () => {

  const currentDate = getCurrentDate();

  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company';
  const companyNameInit = process.env.NEXT_PUBLIC_COMPANY_NAME_INIT || 'Your Initials';
  const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Your Address';
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || 'Your Phone';
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'Your Email';
  const companyWebsite = process.env.NEXT_PUBLIC_COMPANY_WEBSITE || 'Your Website';
  const companyVAT = process.env.NEXT_PUBLIC_COMPANY_VAT || 'Your VAT Number';
  const companyKVK = process.env.NEXT_PUBLIC_COMPANY_KVK || 'Your KVK Number';

  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-start py-20 sm:px-4 px-4 relative  scroll-mt-2 snap-start scroll-smooth md:scroll-auto mt-20">
        <div className="w-full mx-auto bg-white p-8 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

            <p className="mb-4">
            Welcome to <strong>{companyName}</strong> ("{companyNameInit}"). These terms and conditions outline the rules and regulations for the use of our website, <Link href={companyWebsite} aria-label='navigate to website' className="text-blue-500">{companyWebsite}</Link> (the "Website").
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
            By accessing this Website, we assume you accept these terms and conditions in full. Do not continue to use {companyNameInit}&apos;s Website if you do not accept all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
            <p className="mb-4">
            Unless otherwise stated, {companyNameInit} and/or its licensors own the intellectual property rights for all material on this Website. All intellectual property rights are reserved. You may view and/or print pages from {companyWebsite} for your personal use subject to restrictions set in these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Restrictions</h2>
            <p className="mb-4">
            You are specifically restricted from all of the following:
            </p>
            <ul className="w-fit list-disc px-8 mb-2 font-light bg-owlBrown/10 py-4 rounded-xl shadow-lg">
                <li>Publishing any Website material in any other media without prior consent;</li>
                <li>Selling, sublicensing, and/or otherwise commercializing any Website material;</li>
                <li>Publicly performing and/or showing any Website material;</li>
                <li>Using this Website in any way that is or may be damaging to this Website;</li>
                <li>Using this Website in any way that impacts user access to this Website;</li>
                <li>Using this Website contrary to applicable laws and regulations, or in any way that may cause harm to the Website, or to any person or business entity;</li>
                <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website;</li>
                <li>Using this Website to engage in any advertising or marketing.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">User Content</h2>
            <p className="mb-4">
            In these terms and conditions, “User Content” shall mean any audio, video, text, images, or other material you choose to display on this Website. By displaying your content, you grant {companyNameInit} a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
            </p>
            <p className="mb-4">
            Your User Content must be your own and must not infringe on any third party&apos;s rights. {companyNameInit} reserves the right to remove any of your content from this Website at any time, and for any reason, without notice.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">No Warranties</h2>
            <p className="mb-4">
            This Website is provided "as is," with all faults, and {companyNameInit} expresses no representations or warranties of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
            In no event shall {companyNameInit}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. {companyNameInit}, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
            <p className="mb-4">
            You hereby indemnify to the fullest extent {companyNameInit} from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney&apos;s fees) arising out of or in any way related to your breach of any of the provisions of these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Severability</h2>
            <p className="mb-4">
            If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Variation of Terms</h2>
            <p className="mb-4">
            {companyNameInit} is permitted to revise these terms at any time as it sees fit, and by using this Website you are expected to review these terms on a regular basis.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Assignment</h2>
            <p className="mb-4">
            The {companyNameInit} is allowed to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Entire Agreement</h2>
            <p className="mb-4">
            These terms constitute the entire agreement between {companyNameInit} and you in relation to your use of this Website, and supersede all prior agreements and understandings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law & Jurisdiction</h2>
            <p className="mb-4">
            These terms will be governed by and interpreted in accordance with the laws of the Netherlands, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the Netherlands for the resolution of any disputes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">
            If you have any questions about these Terms, you can contact us:
            </p>
            <ul className="w-fit list-disc px-8 mb-2 font-light bg-owlBrown/10 py-4 rounded-xl shadow-lg">
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

export default TermsAndConditions;
