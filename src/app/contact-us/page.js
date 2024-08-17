import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Contact Us</h1>

        <p className="text-gray-700 mb-8">
          We're here to help! If you have any questions, concerns, or feedback, please feel free to reach out to us. Below are the details on how you can contact us:
        </p>

        <ol className="space-y-8">
          <li>
            <h2 className="text-xl font-medium text-gray-900 mb-3">Primary Contact Information</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Email:</strong> support@oxoway.com
                <ul className="list-none pl-5 mt-2">
                  <li>For all inquiries, please email us, and our team will respond within 1-2 days.</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-medium text-gray-900 mb-3">Support Hours</h2>
            <p className="text-gray-700">
              <strong>Availability:</strong> Our support team is available to assist you from <strong>9 AM to 9 PM</strong>.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-medium text-gray-900 mb-3">Escalations</h2>
            <p className="text-gray-700">
              If your inquiry requires further attention, it may be escalated. In such cases, you will be in touch with:
              <ul className="list-disc pl-5 mt-2">
                <li><strong>Vaibhav Sharma, CEO</strong> (only after an email inquiry has been escalated).</li>
              </ul>
            </p>
          </li>

          <li>
            <h2 className="text-xl font-medium text-gray-900 mb-3">Additional Information</h2>
            <p className="text-gray-700">
              For any inquiries, please direct them to the <strong>Oxoway Team</strong> at the email provided above.
            </p>
          </li>
        </ol>

        <p className="text-gray-700 mt-8">We look forward to assisting you!</p>
      </main>
    </div>
  );
};

export default ContactUs;