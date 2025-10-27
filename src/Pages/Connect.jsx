import React from 'react';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
  const navigate = useNavigate();

  const handleMatch = () => {
    navigate('/find');
  };

  const handleStartRunCrew = () => {
    navigate('/crew-explainer');
  };

  const handleJoinClub = () => {
    navigate('/find-your-club');
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
          <p className="text-xl text-gray-600 mb-8">
            Find your people, your pace, your accountability.
          </p>
        </div>

        {/* Main Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Start a Run Crew */}
          <button
            onClick={handleStartRunCrew}
            className="bg-white border-2 border-orange-200 hover:border-orange-400 text-gray-900 font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Start a Run Crew</h3>
                <p className="text-gray-600">Create your own running group</p>
              </div>
            </div>
          </button>

          {/* Join a Run Club */}
          <button
            onClick={handleJoinClub}
            className="bg-white border-2 border-orange-200 hover:border-orange-400 text-gray-900 font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Join a Run Club</h3>
                <p className="text-gray-600">Find existing running groups</p>
              </div>
            </div>
          </button>

          {/* Find a Running Partner */}
          <button
            onClick={handleMatch}
            className="bg-white border-2 border-orange-200 hover:border-orange-400 text-gray-900 font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Find a Running Partner</h3>
                <p className="text-gray-600">Connect with individual runners</p>
              </div>
            </div>
          </button>
        </div>

        {/* Why Connect */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Connect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Better Performance</h4>
              <p className="text-sm text-gray-600">Runners with accountability partners improve 40% faster</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Stay Consistent</h4>
              <p className="text-sm text-gray-600">Having someone to run with keeps you on track</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
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
