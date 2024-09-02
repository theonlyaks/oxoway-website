import React from "react";

const SummarySection = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Summary
      </h2>
      {Object.entries(data)
        .filter(([key]) => key.toLowerCase() !== "weakness")
        .map(([key, value]) => (
          <div key={key} className="mb-4">
            <h3 className="font-semibold text-base mb-2 capitalize">{key}</h3>
            <ul className="list-disc list-inside">
              {value.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default SummarySection;
