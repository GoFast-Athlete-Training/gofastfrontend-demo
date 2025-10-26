import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoFastEarnPoints = () => {
  const navigate = useNavigate();
  const [currentPoints] = useState(1450);
  const [tier] = useState('Bronze');
  const [pointsToNext] = useState(850);
  const [nextTier] = useState('Silver');

  const handleExploreRewards = () => {
    navigate('/rewards-shop');
  };

  const handleHowPointsWork = () => {
    navigate('/how-points-work');
  };

  const handleStartMatchRun = () => {
    navigate('/find');
  };

  const stats = [
    { label: 'Weekly Miles Logged', value: '24.3 mi' },
    { label: 'Matched Runs This Week', value: '4' },
    { label: 'Total Miles This Month', value: '93.1 mi' },
    { label: 'Total Miles This Year', value: '412.8 mi' }
  ];

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
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              GoFast. Earn Points
            </h1>
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">🏆</span>
              <span className="text-lg font-medium text-gray-700">{tier} Runner</span>
            </div>
          </div>

          {/* Points Summary */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Points Earned</h2>
              <div className="text-5xl font-bold mb-4">{currentPoints.toLocaleString()} pts</div>
              
              {/* Tier Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{pointsToNext} pts to {nextTier}</span>
                  <span>{nextTier}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-white rounded-full h-3" 
                    style={{ width: `${((currentPoints - 600) / (currentPoints + pointsToNext - 600)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleExploreRewards}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Explore Rewards Shop
            </button>
            
            <button
              onClick={handleHowPointsWork}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              See How Points Work
            </button>
            
            <button
              onClick={handleStartMatchRun}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <span>🏃‍♂️</span>
              <span>Start a Match Run</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoFastEarnPoints;
