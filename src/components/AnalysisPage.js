"use client";

import React, { useState } from "react";
import FeedbackContent from "./FeedbackContent";
import IdealAnswerContent from "./IdealAnswerContent";
import LearnContent from "./LearnContent";

const AnalysisPage = ({ questionData, answerImages }) => {
  const [activeTab, setActiveTab] = useState("feedback");
  const [isQuestionExpanded, setIsQuestionExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log("adada", answerImages);

  const tabs = [
    { key: "feedback", title: "Feedback" },
    { key: "idealAnswer", title: "Ideal Answer" },
    { key: "learn", title: "Learn" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "feedback":
        return <FeedbackContent data={questionData.feedback} />;
      case "idealAnswer":
        return <IdealAnswerContent data={questionData.ideal_answer} />;
      case "learn":
        return <LearnContent data={questionData.learn} />;
      default:
        return null;
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % answerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + answerImages.length) % answerImages.length
    );
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
              <span className="text-lg">Question</span>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                  isQuestionExpanded ? "transform rotate-180" : ""
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
              <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                <p className="text-gray-700 text-base">
                  {questionData.question}
                </p>
                <div className="mt-3 sm:mt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600 font-semibold text-base">
                      {questionData.marks_total}/10
                    </span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {questionData.subject}
                    </span>
                  </div>
                  <button
                    onClick={openModal}
                    className="text-blue-600 border border-blue-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-50 transition-colors duration-300"
                  >
                    Your Answer
                  </button>
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
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
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

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="w-full h-full max-w-none relative flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex-grow flex items-center justify-center">
              <img
                src={answerImages[currentImageIndex]["url"]}
                alt={`Answer ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={prevImage}
                className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
              >
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={nextImage}
                className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
              >
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {answerImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisPage;
