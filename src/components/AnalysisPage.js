'use client';

import React, { useState } from 'react';
import FeedbackContent from './FeedbackContent';
import IdealAnswerContent from './IdealAnswerContent';
import LearnContent from './LearnContent';

const AnalysisPage = ({ questionData }) => {
  const [activeTab, setActiveTab] = useState('feedback');
  const [isQuestionExpanded, setIsQuestionExpanded] = useState(true);

  const tabs = [
    { key: 'feedback', title: 'Feedback' },
    { key: 'idealAnswer', title: 'Ideal Answer' },
    { key: 'learn', title: 'Learn' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'feedback':
        return <FeedbackContent data={questionData.feedback} />;
      case 'idealAnswer':
        return <IdealAnswerContent data={questionData.ideal_answer} />;
      case 'learn':
        return <LearnContent data={questionData.learn} />;
      default:
        return null;
    }
  };

  return (
    <div className="text-black min-h-screen bg-gray-100 flex justify-center">
      <main className="w-full max-w-2xl px-2 sm:px-4 py-4 sm:py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Question Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setIsQuestionExpanded(!isQuestionExpanded)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold flex justify-between items-center"
            >
              <span className='text-lg'>Question</span>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                  isQuestionExpanded ? 'transform rotate-180' : ''
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isQuestionExpanded && (
              <div className="px-4 sm:px-6 py-3 sm:py-4">
                <p className="text-gray-700 text-base">{questionData.question}</p>
                <div className="mt-3 sm:mt-4 flex justify-between items-center">
                  <span className="text-blue-600 font-semibold text-base">
                    {questionData.marks_total}/10
                  </span>
                  <div>
                    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">
                      {questionData.subject}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 font-medium py-4 sm:py-4 px-2 sm:px-4 text-center text-sm ${
                  activeTab === tab.key
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6">{renderTabContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default AnalysisPage;