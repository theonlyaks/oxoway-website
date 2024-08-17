import React from 'react';
import Head from 'next/head';

const CancellationRefund = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Cancellation and Refund Policy - Oxoway</title>
        <meta name="description" content="Cancellation and Refund Policy for Oxoway app" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Cancellation and Refund Policy for Oxoway</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: 9 July 2024</p>

        <p className="text-gray-700 mb-8">
          At Oxoway, we strive to provide the best possible service to our users. However, we understand that situations may arise where you need to cancel your subscription or request a refund. Below is our policy regarding cancellations and refunds for the Answer Evaluation Pack subscription.
        </p>

        <ol className="space-y-8">
          {policyItems.map((item, index) => (
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

const policyItems = [
  {
    title: "Cancellation Policy",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Flexibility:</strong> Users can cancel their subscription at any time.</li>
        <li><strong>Cancellation Process:</strong> To initiate a cancellation, please email our support team at Support@oxoway.com.</li>
        <li><strong>Partial Use:</strong> If the service has been partially used (e.g., if any answers have been evaluated), no refund will be provided for the remaining period of the subscription.</li>
      </ul>
    )
  },
  {
    title: "Refund Policy",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Eligibility:</strong> Refunds are only applicable to unused packs. Once any part of the service has been used, the refund will not be processed.</li>
        <li><strong>Refund Process:</strong> Once a refund is approved, it will be processed within 7 days and credited back to the original payment method.</li>
        <li><strong>No Fees:</strong> We do not charge any cancellation or restocking fees.</li>
        <li><strong>Customer Support:</strong> Our support team is here to assist you. If you encounter any issues or have concerns about the service, please contact us at Support@oxoway.com. We will do our best to resolve the issue before proceeding with the refund.</li>
      </ul>
    )
  }
];

export default CancellationRefund;