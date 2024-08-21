// components/Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderAnalysis() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex justify-center items-center h-12 sm:h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Xoway" 
              width={24} 
              height={24}
              className="sm:w-8 sm:h-8"
            />
            <span className="ml-2 text-base sm:text-xl font-semibold text-gray-800">Oxoway</span>
          </Link>
        </div>
      </header>
      <div className="bg-purple-600 py-2 sm:py-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left">
            Download the App and start your success
          </h2>
          <a 
            href="https://play.google.com/store/apps/details?id=com.oxoway" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm py-1 sm:py-2 px-3 sm:px-4 rounded"
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
}