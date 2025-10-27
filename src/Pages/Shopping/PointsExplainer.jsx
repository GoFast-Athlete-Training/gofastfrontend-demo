import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PointsExplainer = () => {
  const navigate = useNavigate();
  const [currentPoints] = useState(0);

  const handleFindMatches = () => {
    navigate('/find');
  };

  const handleBackToHome = () => {
    navigate('/athlete-home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-8">
          {/* Current Points */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">🏆</span>
              <span className="text-lg font-medium text-gray-700">Current Points: {currentPoints}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Earn Points
            </h1>
            <p className="text-gray-600 text-lg">
              Stay active and earn rewards for your running.
            </p>
          </div>

          {/* Action Sections */}
          <div className="space-y-6 mb-8">
            {/* Find Running Partners */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find Running Partners</h3>
                <p className="text-gray-600 mb-4">
                  Connect with runners at your pace and earn points when you run together.
                </p>
                <button
                  onClick={handleFindMatches}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Find Running Partners
                </button>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Fitness Apps</h3>
                <p className="text-gray-600 mb-4">
                  Sync your runs automatically. Coming soon!
                </p>
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <button
              onClick={handleBackToHome}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsExplainer;
