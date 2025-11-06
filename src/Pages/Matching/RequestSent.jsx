import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';

const RequestSent = () => {
  const navigate = useNavigate();

  const handleBackToMatches = () => {
    navigate('/find-matches');
  };

  const handleGoHome = () => {
    navigate('/matching-home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/matching-home')}
              className="text-gray-600 hover:text-gray-800"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
              <span className="font-bold text-gray-900">GoFast</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <FaCheck className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Sent!</h1>
          <p className="text-gray-600 mb-8">
            Your running request has been sent. You'll be notified when they respond!
          </p>

          {/* What's Next */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">1</span>
                </div>
                <p className="text-sm text-gray-600">They'll review your profile and running preferences</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">2</span>
                </div>
                <p className="text-sm text-gray-600">If they're interested, you'll get a match notification</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">3</span>
                </div>
                <p className="text-sm text-gray-600">Start chatting and plan your first run together!</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleBackToMatches}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Find More Matches
            </button>
            
            <button
              onClick={handleGoHome}
              className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
            >
              Back to Dashboard
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Keep exploring to find more running partners!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestSent;
