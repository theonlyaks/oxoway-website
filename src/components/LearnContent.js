import React from 'react';
import Section from './Section';

const LearnContent = ({ data }) => {
  return (
    <div className="space-y-8">
      <Section 
        title="Additional Points" 
        icon="lightbulb" 
        content={data.additional_points} 
      />
      <Section 
        title="Case Studies" 
        icon="book-open" 
        content={data.case_studies} 
      />
      <Section 
        title="Mnemonic Notes" 
        icon="clipboard-list" 
        content={data.mnemonic_notes} 
      />
      <Section 
        title="Suggested Reading" 
        icon="book" 
        content={data.suggested_reading} 
      />
    </div>
  );
};

export default LearnContent;