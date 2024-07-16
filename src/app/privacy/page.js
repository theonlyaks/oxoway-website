import React from 'react';
import Head from 'next/head';

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Privacy Policy - Oxoway</title>
        <meta name="description" content="Privacy Policy for Oxoway app" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Privacy Policy for Oxoway</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: 9 July 2024</p>

        <ol className="space-y-8">
          {privacyItems.map((item, index) => (
            <li key={index}>
              <h2 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h2>
              {item.content}
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
};

const privacyItems = [
  {
    title: "Introduction",
    content: <p className="text-gray-700">Oxoway ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app.</p>
  },
  {
    title: "Information We Collect",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Personal Information: We collect personal information that you provide to us when you register for an account, such as your name, email address, and any other information required by Google or Apple sign-in methods.</li>
        <li>Usage Data: We collect information about your interactions with the app, including the pages you visit, the features you use, and the actions you take.</li>
        <li>Device Information: We collect information about the device you use to access the app, including the device's unique identifier, operating system, and version.</li>
      </ul>
    )
  },
  {
    title: "Use of Your Information",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>To Provide and Manage the Service: We use your information to create and manage your account, provide the features of the app, and improve our services.</li>
        <li>To Communicate with You: We may use your information to send you updates, security alerts, and support messages.</li>
        <li>To Ensure Security: We use your information to protect against fraudulent activities and to ensure the security of our services.</li>
      </ul>
    )
  },
  {
    title: "Use of Camera Feature",
    content: <p className="text-gray-700">Our app requires access to your device's camera to upload handwritten answers for UPSC questions. This feature is used solely for this purpose and does not store or share your camera data beyond the intended use.</p>
  },
  {
    title: "Sharing Your Information",
    content: <p className="text-gray-700">We do not share your information with third parties except as required by law.</p>
  },
  {
    title: "Data Security",
    content: <p className="text-gray-700">We use standard administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
  },
  {
    title: "Retention of Your Information",
    content: (
      <p className="text-gray-700">We will retain your personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our policies. When personal information is no longer needed, we will delete it securely.</p>
    )
  },
  {
    title: "Your Rights",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Access and Update: You have the right to access and update your personal information.</li>
        <li>Delete: You have the right to request that we delete your personal information, subject to certain exceptions. We implement a “soft delete” approach where accounts are marked as inactive but not immediately removed. After a grace period, we will automatically delete inactive accounts.</li>
      </ul>
    )
  },
  {
    title: "Changes to This Privacy Policy",
    content: <p className="text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
  },
  {
    title: "Contact Us",
    content: <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at support@oxoway.com.</p>
  }
];

export default Privacy;
