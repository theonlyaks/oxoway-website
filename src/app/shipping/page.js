import React from 'react';
import Head from 'next/head';

const ShippingDelivery = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Shipping and Delivery Policy - Oxoway</title>
        <meta name="description" content="Shipping and Delivery Policy for Oxoway app" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Shipping and Delivery Policy for Oxoway</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: 12 August 2024</p>

        <p className="text-gray-700 mb-8">
          At Oxoway, we ensure that our digital goods are delivered promptly and efficiently. Below are the details of our Shipping and Delivery Policy for your reference.
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
    title: "Delivery Timeline",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Access Timeframe:</strong> After completing the purchase, users can expect to receive access to their digital goods within a few minutes.</li>
        <li><strong>Potential Delays:</strong> In some cases, there may be delays due to payment processing or long queue times. We appreciate your patience in such situations.</li>
      </ul>
    )
  },
  {
    title: "Delivery Method",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Online Delivery:</strong> The digital goods are delivered directly to the mobile app associated with your account.</li>
        <li><strong>Confirmation:</strong> Users will receive a confirmation on the mobile app once the digital goods have been added to their account.</li>
      </ul>
    )
  },
  {
    title: "Access and Availability",
    content: (
      <p className="text-gray-700"><strong>Validity:</strong> Purchased packs are valid for 28 days from the date of purchase. Please ensure you utilize the packs within this period.</p>
    )
  },
  {
    title: "Support for Delivery Issues",
    content: (
      <p className="text-gray-700"><strong>Contact for Assistance:</strong> If you do not receive your digital goods within the expected timeframe, please contact our support team at Support@oxoway.com. We are here to help resolve any issues you may encounter.</p>
    )
  },
  {
    title: "Additional Considerations",
    content: (
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Automatic Addition:</strong> Digital goods are automatically added to your mobile app account. Please check your credits within the app to confirm delivery.</li>
        <li><strong>No Additional Requirements:</strong> There are no special instructions or additional requirements for accessing your digital goods.</li>
      </ul>
    )
  }
];

export default ShippingDelivery;