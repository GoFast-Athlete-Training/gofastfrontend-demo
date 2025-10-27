import React from 'react';
import { useNavigate } from 'react-router-dom';

const HowPointsWork = () => {
  const navigate = useNavigate();

  const handleMyPointsStatus = () => {
    navigate('/gofast-earn-points');
  };

  const handleBrowseShop = () => {
    navigate('/rewards-shop');
  };

  const earningMethods = [
    { action: 'Complete a Matched Run', points: '250 pts' },
    { action: 'Log a Solo Run (Strava/Garmin)', points: '100 pts' },
    { action: 'Invite a Friend Who Signs Up', points: '500 pts' },
    { action: 'Hit Weekly Mileage Goal', points: '200 pts' },
    { action: 'Submit a Post-Run Review', points: '50 pts' }
  ];

  const rewardTiers = [
    { points: '3,000 pts', reward: '$5 Shop Credit' },
    { points: '6,000 pts', reward: '$10 Shop Credit' },
    { points: '9,000 pts', reward: '$15 Shop Credit' },
    { points: '15,000 pts', reward: '$25 Shop Credit' }
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              GoFast Points: How They Work
            </h1>
            <p className="text-gray-600 text-lg">
              Earn points by running solo or with a match. Use them in the GoFast Shop to save on gear, fuel, and more.
            </p>
          </div>

          {/* Ways to Earn Points */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ways to Earn Points</h2>
            <div className="space-y-3">
              {earningMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{method.action}</span>
                    <span className="text-orange-600 font-bold">{method.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points to Rewards */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Points to Rewards</h2>
            <div className="space-y-3">
              {rewardTiers.map((tier, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{tier.points}</span>
                    <span className="text-orange-600 font-bold">{tier.reward}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleMyPointsStatus}
              className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              My Points Status
            </button>
            
            <button
              onClick={handleBrowseShop}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <span>🛒</span>
              <span>Browse Shop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowPointsWork;
