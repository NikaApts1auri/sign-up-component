
import React from 'react';

const SuccessPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="text-green-500 mb-4">
          {/* Success Icon (using Heroicons) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Success!</h1>
        <p className="text-gray-600 mb-6">Your operation was completed successfully.</p>
        <a href="/" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default SuccessPage;
