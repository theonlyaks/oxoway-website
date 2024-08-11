import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export default function GetEdgeSection() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(100);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const querySnapshot = await getDocs(collection(db, "pre_registration"));
      const registrationCount = querySnapshot.size;
      setSpotsLeft(Math.max(0, 100 - registrationCount));
    };

    fetchRegistrations();
  }, []);

  const handlePreRegister = () => {
    setShowInput(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsLoading(true);
      try {
        const emailQuery = query(collection(db, "pre_registration"), where("email", "==", email));
        const querySnapshot = await getDocs(emailQuery);
        
        if (querySnapshot.empty) {
          await addDoc(collection(db, "pre_registration"), {
            email: email,
            timestamp: new Date()
          });
          setRegistered(true);
          setAlreadyRegistered(false);
          setSpotsLeft(prevSpots => Math.max(0, prevSpots - 1));
          setEmail('');  // Clear the input

        } else {
          setAlreadyRegistered(true);
          setRegistered(false);
        }
      } catch (error) {
        console.error("Error checking/adding document: ", error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please enter a valid email address');
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get an edge, be the first to try
        </h2>
        
        {!showInput ? (
          <div className="flex flex-col items-center">
            <button 
              onClick={handlePreRegister} 
              className="bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-300 transition duration-300 mb-4"
            >
              Pre-register now
            </button>
            <div className="text-sm">
              <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-2"></span>
              <span>{spotsLeft} spots left</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col sm:flex-row justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full sm:rounded-r-none text-black mb-2 sm:mb-0 w-full sm:w-auto"
                required
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="bg-cyan-400 text-gray-900 font-bold px-6 py-2 rounded-full sm:rounded-l-none hover:bg-cyan-300 transition duration-300 w-full sm:w-auto flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Submit'}
              </button>
            </div>
          </form>
        )}
        
        {registered && (
          <p className="mt-4 text-green-500 font-semibold">You are successfully pre-registered!</p>
        )}
        {alreadyRegistered && (
          <p className="mt-4 text-yellow-500 font-semibold">You are already pre-registered with this email.</p>
        )}
      </div>
    </section>
  );
}