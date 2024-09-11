// components/TermsOfService.js

import Head from 'next/head';

const TermsOfService = () => {
  // Placeholder values provided by the user
  const websiteName = "Overberg Lighting & Electrical";
  const contactEmail = "overberg@overberglighting.com";
  const contactPhone = "(028)514-3417";

  return (
    <div className="bg-black font-sans text-white py-[150px]">
      <Head>
        <title>Terms of Service</title>
      </Head>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

        <p className="mb-4">
          Please read these terms of service ("terms of service", "terms") carefully before using {websiteName} website ("website", "service") operated by us.
        </p>

        <h2 className="text-lg font-semibold mb-2">Conditions of Use</h2>
        <p className="mb-4">
          By accessing or using our website, you agree to comply with these terms. If you do not agree with any part of the terms, please do not use our services.
        </p>

        <h2 className="text-lg font-semibold mb-2">Limit Your Liabilities</h2>
        <p className="mb-4">
          We are not responsible for any damages or losses resulting from your use of our website. Use our services at your own risk.
        </p>
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our terms of service, please contact us at {contactEmail} or {contactPhone}.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
