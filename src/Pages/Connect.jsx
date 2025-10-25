import React from 'react';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
  const navigate = useNavigate();

  const handleMatch = () => {
    navigate('/match');
  };

  const handleStartRunCrew = () => {
    navigate('/start-run-crew');
  };

  const handleJoinClub = () => {
    navigate('/clubs');
  };

  const handleBack = () => {
    navigate('/start');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={handleBack} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            It's better to run together.
          </h1>
          <p className="text-xl text-gray-600">
            Find your people, your pace, your accountability.
          </p>
        </div>

        {/* Three Connection Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Match with Others */}
          <div 
            onClick={handleMatch}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-blue-500"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Others</h2>
              <p className="text-gray-600 mb-6">
                Discover runners who match your pace, goals, and schedule. Perfect for one-on-one accountability.
              </p>
              <div className="text-blue-600 font-medium">
                Tinder-style matching →
              </div>
            </div>
          </div>

          {/* Start a Run Crew */}
          <div 
            onClick={handleStartRunCrew}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-green-500"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Start a Run Crew</h2>
              <p className="text-gray-600 mb-6">
                Create your own running group. Invite friends, set regular meetups, and build your community.
              </p>
              <div className="text-green-600 font-medium">
                Create your crew →
              </div>
            </div>
          </div>

          {/* Join a Club */}
          <div 
            onClick={handleJoinClub}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-orange-500"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏃‍♂️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join a Club</h2>
              <p className="text-gray-600 mb-6">
                Discover existing running clubs in your area. Join established groups with regular meetups.
              </p>
              <div className="text-orange-600 font-medium">
                Browse clubs →
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Why Connect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-bold text-gray-900 mb-2">Better Performance</h4>
              <p className="text-sm text-gray-600">Runners with accountability partners improve 40% faster</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Stay Consistent</h4>
              <p className="text-sm text-gray-600">Having someone to run with keeps you on track</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-900 mb-2">Achieve Goals</h4>
              <p className="text-sm text-gray-600">Shared goals and mutual support lead to success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
