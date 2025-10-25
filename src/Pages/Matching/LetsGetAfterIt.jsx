import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetsGetAfterIt = () => {
  const navigate = useNavigate();
  const [currentPoints] = useState(0);

  const handlePairMeNow = () => {
    navigate('/find');
  };

  const handleConnectFitnessApp = () => {
    navigate('/link-running-app');
  };

  const handleReferRunner = () => {
    alert('Refer a Runner feature coming soon!');
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
              Let's Get After It
            </h1>
            <p className="text-gray-600 text-lg">
              You've unlocked access. Now it's time to move.
            </p>
          </div>

          {/* Action Sections */}
          <div className="space-y-6 mb-8">
            {/* Match Up */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Match Up</h3>
                <p className="text-gray-600 mb-4">
                  Pair with someone at your pace. Earn 2x points when you complete a run together.
                </p>
                <button
                  onClick={handlePairMeNow}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Pair Me Now
                </button>
              </div>
            </div>

            {/* Log My Miles */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Log My Miles</h3>
                <p className="text-gray-600 mb-4">
                  Solo runs still count. Earn points every time you log a run.
                </p>
                <button
                  onClick={handleConnectFitnessApp}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Connect My Fitness App
                </button>
              </div>
            </div>

            {/* Refer a Friend */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Refer a Friend</h3>
                <p className="text-gray-600 mb-4">
                  Bring someone on board. You both earn 25 bonus points.
                </p>
                <button
                  onClick={handleReferRunner}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Refer a Runner
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

export default LetsGetAfterIt;
