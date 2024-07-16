import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export default function GetEdgeSection() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(100);

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
      try {
        // Check if email already exists
        const emailQuery = query(collection(db, "pre_registration"), where("email", "==", email));
        const querySnapshot = await getDocs(emailQuery);
        
        if (querySnapshot.empty) {
          // Email doesn't exist, proceed with registration
          await addDoc(collection(db, "pre_registration"), {
            email: email,
            timestamp: new Date()
          });
          setRegistered(true);
          setAlreadyRegistered(false);
          setSpotsLeft(prevSpots => Math.max(0, prevSpots - 1));
        } else {
          // Email already exists
          setAlreadyRegistered(true);
          setRegistered(false);
        }
      } catch (error) {
        console.error("Error checking/adding document: ", error);
        alert('An error occurred. Please try again.');
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
        {/* Decorative elements */}
        <span className="absolute top-0 left-1/4 text-cyan-400 text-2xl">+</span>
        <span className="absolute top-1/2 left-0 text-cyan-400 text-2xl">/</span>
        <span className="absolute top-0 right-1/4 text-cyan-400 text-2xl">*</span>
        <span className="absolute bottom-0 right-1/3 text-cyan-400 text-2xl">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get an edge, be the first to try
        </h2>
        
        {!showInput ? (
          <div>
            <button 
              onClick={handlePreRegister} 
              className="bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-300 transition duration-300"
            >
              Pre-register now
            </button>
            <div className="mt-4 text-sm">
              <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-2"></span>
              <span>{spotsLeft} spots left</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full text-black"
                required
              />
              <button 
                type="submit" 
                className="bg-cyan-400 text-gray-900 font-bold px-6 py-2 rounded-r-full hover:bg-cyan-300 transition duration-300"
              >
                Submit
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