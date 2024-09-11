// components/PrivacyPolicy.js

import Head from 'next/head';

const PrivacyPolicy = () => {
  // Placeholder values provided by the user
  const websiteName = "Overberg Lighting & Electrical";
  const contactEmail = "overberg@overberglighting.com";
  const contactPhone = "(028)514-3417";

  return (
    <div className="bg-black text-white py-[150px] font-sans">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

        <h2 className="text-lg font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          Welcome to {websiteName}! We are committed to protecting your privacy and ensuring the security of your
          personal information. This privacy policy outlines how we collect, use, share, and protect your data. By using
          our website, you agree to the terms of this policy.
        </p>
        <h2 className="text-lg font-semibold mb-2">What Information We Collect</h2>
        <p className="mb-4">
            We collect the following types of information:
        </p>
        <ul className="list-disc pl-6 mb-4">
            <li><div className='font-bold'>Personal Information:</div> When you interact with our website (such as sending emails,
                phone calls, or making purchases), we may collect personal information such as your name,
                email address, phone number, and address.</li>
            <li><div className='font-bold'>Non-Personal Information:</div> We also collect non-personal information, including browser
                type, IP address, device information, and website usage data. This helps us improve our services and
                enhance your experience.</li>
        </ul>        <h2 className="text-lg font-semibold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
            We use your information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
            <li>Providing Services: To fulfill orders, process payments, and deliver products or services. To respond to
                inquiries and provide customer support.</li>
            <li>Improving Our Website: To analyze website traffic and usage patterns. To enhance user experience and
                optimize content.</li>
        </ul>      
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our privacy policy, please contact us at {contactEmail} or {contactPhone}.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
