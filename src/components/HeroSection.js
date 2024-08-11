import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export default function HeroSection() {
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
    <section className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 flex justify-between items-center bg-white rounded-full px-4 py-2">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full mr-2" />
          </div>
          <button onClick={handlePreRegister} className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
            Pre-register now
          </button>
        </header>
        <div className="text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Best UPSC AI mentor vetted by experts
          </h1>
          <p className="mb-8 text-lg">
            Expert tested guidance from the comfort of your home.
          </p>
          <div className="inline-flex flex-col items-center">
            {!showInput ? (
              <div className="flex flex-col items-center">
                <button onClick={handlePreRegister} className="bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full text-lg mb-4">
                  Pre-register now
                </button>
                <div className="flex items-center text-sm">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  <span className="text-gray-300">{spotsLeft} spots left</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`transition-all duration-500 ease-in-out ${showInput ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
                <div className="flex flex-col sm:flex-row items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-full sm:rounded-r-none text-black mb-2 sm:mb-0"
                    required
                    disabled={isLoading}
                  />
                  <button type="submit" className="bg-cyan-400 text-black font-semibold px-4 py-2 w-full rounded-full sm:rounded-l-none flex items-center justify-center" disabled={isLoading}>
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
          {registered && (
            <p className="mt-4 text-green-500 font-semibold">You are successfully pre-registered!</p>
          )}
          {alreadyRegistered && (
            <p className="mt-4 text-yellow-500 font-semibold">You are already pre-registered with this email.</p>
          )}
          <p className="mt-8 text-sm">
            Hurry! 30 day money back guarantee for first 100 users!
          </p>
        </div>
      </div>
    </section>
  );
}