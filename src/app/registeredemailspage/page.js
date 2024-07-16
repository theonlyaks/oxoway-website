'use client'

import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function RegisteredEmailsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const q = query(collection(db, "pre_registration"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const registrationsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp.toDate().toLocaleString() // Convert Firestore Timestamp to string
        }));
        setRegistrations(registrationsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching registrations: ", error);
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="container h-screen mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-6">Registered Emails</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {registrations.map((registration) => (
              <tr key={registration.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{registration.email}</td>
                <td className="py-3 px-4">{registration.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {registrations.length === 0 && (
        <p className="text-center py-4">No registrations found.</p>
      )}
    </div>
  );
}