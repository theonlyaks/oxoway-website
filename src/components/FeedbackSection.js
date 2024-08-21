import React, { useState } from 'react';
import FormattedText from './FormattedText';

const FeedbackSection = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({...prev, [index]: !prev[index]}));
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        Feedback
      </h2>
      {data.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left py-2 flex justify-between items-center font-medium"
          >
            {item.title}
            <svg
              className={`w-5 h-5 transition-transform ${
                expandedItems[index] ? 'transform rotate-180' : ''
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
          {expandedItems[index] && (
            <div className="py-2 text-gray-700">
              <FormattedText content={item.content} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedbackSection;