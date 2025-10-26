import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrophyBoard = () => {
  const navigate = useNavigate();
  const [currentPoints] = useState(0);

  const handleReadyToEarn = () => {
    navigate('/lets-get-after-it');
  };

  const handleHowPointsWork = () => {
    navigate('/how-points-work');
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
        <div className="p-8 text-center">
          {/* Trophy Display */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-6xl">🏆</span>
            </div>
            <div className="bg-gray-100 rounded-full px-6 py-3 inline-block">
              <span className="text-2xl font-bold text-gray-900">{currentPoints} Points</span>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Your GoFast Trophy Board
            </h1>
            <p className="text-gray-600 text-lg">
              Earn points by staying active and showing up.
            </p>
          </div>

          {/* How You Earn Points */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">How You Earn Points</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏃‍♂️</span>
                    <span className="font-medium text-gray-900">Match with other runners</span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Earn Points
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <span className="font-medium text-gray-900">Complete Runs</span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Earn Points
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👥</span>
                    <span className="font-medium text-gray-900">Refer friends</span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Earn Points
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Info */}
          <div className="bg-orange-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Redeem points for discounts in the <span className="text-orange-600">GoFast Shop</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Use your points to save on gear, fuel, and more!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleReadyToEarn}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              I'm Ready to Earn Points
            </button>
            
            <button
              onClick={handleHowPointsWork}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              How Points Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrophyBoard;
