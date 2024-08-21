import React from 'react';

const MarksSection = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Marks
        <span className="ml-auto bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {data.result}/{data.total}
        </span>
      </h2>
      {data.details.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
          <div>
            <h3 className="font-medium">{item.key}</h3>
            <p className="text-sm text-gray-600">{item.suggestion}</p>
          </div>
          <span className="font-semibold text-blue-600">{item.result}/{item.total}</span>
        </div>
      ))}
    </div>
  );
};

export default MarksSection;