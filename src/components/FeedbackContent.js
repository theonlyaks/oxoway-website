import React from 'react';
import SummarySection from './SummarySection';
import MarksSection from './MarksSection';
import FeedbackSection from './FeedbackSection';
import ImproveSection from './ImproveSection';

const FeedbackContent = ({ data }) => {
  return (
    <div>
      <MarksSection data={data.marks} />
      <FeedbackSection data={data.feedback} />
      <ImproveSection data={data.improve} />
      <SummarySection data={data.summary} />
    </div>
  );
};

export default FeedbackContent;