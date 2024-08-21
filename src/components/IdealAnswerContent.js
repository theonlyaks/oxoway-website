import React from 'react';
import FormattedText from './FormattedText';

const IdealAnswerContent = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Ideal Answer
      </h2>
      <div className="prose max-w-none">
        <FormattedText content={data} />
      </div>
    </div>
  );
};

export default IdealAnswerContent;