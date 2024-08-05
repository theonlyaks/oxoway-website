'use client';

import { useState } from 'react';
import { db } from '../../lib/firebase'; // Adjust the import path as needed
import { collection, addDoc } from 'firebase/firestore';

export default function DeleteProfile() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'deleteRequests'), {
        email,
        createdAt: new Date()
      });

      setEmail('');
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      console.error('Error submitting delete request: ', error);
      alert('An error occurred while submitting your request');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-2">Oxoway</h1>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Delete Profile</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Warning: This action will permanently delete your Oxoway account. All your data and information associated with this account will be irretrievably lost.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Delete Request'}
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
                      Your request is submitted. We'll get back to you for confirmation.
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