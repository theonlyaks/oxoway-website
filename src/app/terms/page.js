import React from 'react';
import Head from 'next/head';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Terms of Service - Oxoway</title>
        <meta name="description" content="Terms of Service for Oxoway app" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Terms of Service for Oxoway</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: 9 July 2024</p>

        <ol className="space-y-8">
          {termsItems.map((item, index) => (
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

const termsItems = [
  {
    title: "Introduction",
    content: <p className="text-gray-700">Welcome to Oxoway. These Terms of Service ("Terms") govern your use of our app, accessible from Oxoway. By using our app, you agree to these Terms. If you do not agree with these Terms, please do not use our app.</p>
  },
  {
    title: "Company Information",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Name: Oxoway</li>
        <li>Contact Information: support@oxoway.com</li>
      </ul>
    )
  },
  {
    title: "Acceptance of Terms",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Users must explicitly agree to these Terms before using the app by checking a box.</li>
        <li>Users must be at least 18 years old to use the app.</li>
      </ul>
    )
  },
  {
    title: "User Accounts",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Registration is required to use the app.</li>
        <li>Users can register using Google or Apple sign-in, and the information collected during registration includes any data required by these sign-in methods.</li>
        <li>Users are not allowed to terminate their accounts.</li>
      </ul>
    )
  },
  {
    title: "User Conduct",
    content: (
      <p className="text-gray-700">There are no specific rules of conduct enforced beyond standard legal requirements. No actions can result in account suspension or termination beyond those related to content violations.</p>
    )
  },
  {
    title: "Content",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Users can only upload content when prompted by the app.</li>
        <li>Rights and Licenses: Users grant Oxoway a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.</li>
        <li>Handling Violations: If content violates the TOS, users will be issued a warning. Repeated violations will result in a ban.</li>
      </ul>
    )
  },
  {
    title: "Payments and Subscriptions",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>The app includes paid features and subscriptions.</li>
        <li>Refund Policy: Users are entitled to a refund within 7 days of purchase.</li>
      </ul>
    )
  },
  {
    title: "Privacy",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>We have a separate Privacy Policy, which includes details on the use of the camera feature. The Privacy Policy is referenced in these Terms.</li>
        <li>Handling User Data: User data is handled with utmost care and is only used for providing and improving the app's services. We do not share user data with third parties without user consent, except as required by law.</li>
      </ul>
    )
  },
  {
    title: "Intellectual Property",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Oxoway retains ownership of all content provided within the app and any user-uploaded content.</li>
        <li>Users must not infringe on the intellectual property rights of others.</li>
      </ul>
    )
  },
  {
    title: "Disclaimers and Limitation of Liability",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Disclaimers: The app is provided on an "as is" and "as available" basis. We do not guarantee the availability or functionality of the app at all times.</li>
        <li>Limitation of Liability: To the fullest extent permitted by law, Oxoway will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the app; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
      </ul>
    )
  },
  {
    title: "Governing Law",
    content: <p className="text-gray-700">These Terms are governed by the laws of India.</p>
  },
  {
    title: "Changes to the TOS",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Users will be notified of changes to these Terms through an in-app popup with a link to read the updated Terms.</li>
        <li>Users must accept the changes by clicking a checkbox to continue using the app.</li>
      </ul>
    )
  },
  {
    title: "Miscellaneous",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Dispute Resolution: Any disputes arising out of or relating to these Terms or the app will be resolved through arbitration in India, in accordance with the laws of India.</li>
        <li>Third-Party Services: The app may contain links to third-party websites or services that are not owned or controlled by Oxoway. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</li>
        <li>Termination of Service: Oxoway reserves the right to terminate a user's access to the app if the account is dormant for over 365 days.</li>
      </ul>
    )
  }
];

export default TermsOfService;
