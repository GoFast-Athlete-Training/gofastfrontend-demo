import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (card) => {
    if (expandedCard === card) {
      setExpandedCard(null);
    } else {
      setExpandedCard(card);
    }
  };

  const handleConnectOption = (option) => {
    switch (option) {
      case 'friends':
        navigate('/crews');
        break;
      case 'others':
        navigate('/match');
        break;
      case 'groups':
        navigate('/clubs');
        break;
      default:
        break;
    }
  };

  const handleTrain = () => {
    navigate('/train');
  };

  const handleEarn = () => {
    navigate('/earn');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Accountability Layer
          </h1>
          <p className="text-xl text-gray-600">
            Choose your path to better running
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connect Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              expandedCard === 'connect' ? 'ring-4 ring-orange-500' : ''
            }`}
            onClick={() => handleCardClick('connect')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect</h2>
              <p className="text-gray-600 mb-6">
                Build your running community and find accountability partners
              </p>
              
              {expandedCard === 'connect' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      It's better to run together.
                    </h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleConnectOption('friends')}
                        className="w-full flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl">👥</span>
                        <span className="font-medium">Be with Friends</span>
                      </button>
                      <button
                        onClick={() => handleConnectOption('others')}
                        className="w-full flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl">🔍</span>
                        <span className="font-medium">Find Others</span>
                      </button>
                      <button
                        onClick={() => handleConnectOption('groups')}
                        className="w-full flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl">🏃‍♂️</span>
                        <span className="font-medium">Find Groups</span>
                      </button>
                    </div>
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="w-full mt-4 text-gray-600 hover:text-gray-800 font-medium"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Train Card */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-blue-500"
            onClick={handleTrain}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏃‍♂️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Train</h2>
              <p className="text-gray-600 mb-6">
                Track your runs, sync with Garmin, and log your progress
              </p>
              <div className="text-blue-600 font-medium">
                Garmin sync + manual log →
              </div>
            </div>
          </div>

          {/* Earn Card */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-green-500"
            onClick={handleEarn}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏆</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Earn</h2>
              <p className="text-gray-600 mb-6">
                Compete on leaderboards and complete challenges
              </p>
              <div className="text-green-600 font-medium">
                Leaderboard + challenges →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
