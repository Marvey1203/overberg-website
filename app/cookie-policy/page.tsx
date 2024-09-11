// components/CookiePolicy.js

import Head from 'next/head';

const CookiePolicy = () => {
  // Placeholder values provided by the user
  const websiteName = "Overberg Lighting & Electrical";
  const contactEmail = "overberg@overberglighting.com";
  const contactPhone = "(028)514-3417";

  return (
    <div className="bg-black font-sans text-white py-[150px]">
      <Head>
        <title>Cookie Policy</title>
      </Head>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>

        <p className="mb-4">
          We use cookies on {websiteName} website. By continuing to browse our site, you consent to our use of cookies as described in this policy.
        </p>

        <h2 className="text-lg font-semibold mb-2">What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are stored on your device when you visit a website. They help improve your browsing experience by remembering your preferences and actions.
        </p>

        <h2 className="text-lg font-semibold mb-2">Types of Cookies We Use</h2>
        <p className="mb-4">
          We use the following types of cookies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> These cookies help us analyze website traffic and improve our services.</li>
          <li><strong>Preference Cookies:</strong> These cookies remember your preferences (e.g., language, region).</li>
        </ul>

        <h2 className="text-lg font-semibold mb-2">Managing Cookies</h2>
        <p className="mb-4">
          You can manage cookies through your browser settings. You can choose to block or delete cookies, but some features of our website may not work correctly.
        </p>

        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our cookie policy, please contact us at {contactEmail} or {contactPhone}.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
