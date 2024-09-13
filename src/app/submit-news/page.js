'use client';

import { useState } from 'react';
import { httpsCallable } from "firebase/functions";
import { functions } from '../../lib/firebase'; // Adjust the path as needed

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitNews = httpsCallable(functions, 'submitNews');

      const result = await submitNews();
      console.log('News submitted successfully:', result.data);

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error('Error submitting news:', error);
      alert('An error occurred while submitting the news');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Submit News</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit News'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center px-4 py-6 pointer-events-none sm:p-0 z-50">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      News submitted successfully!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}