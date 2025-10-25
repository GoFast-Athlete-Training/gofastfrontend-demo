import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoFastPlatform = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast Platform</span>
            </div>
            <button
              onClick={() => navigate('/profile-build')}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Complete Running Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Training tools, race information, and everything you need to reach your running goals
          </p>
        </div>

        {/* Platform Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Training Hub */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Training</h3>
              <p className="text-gray-600 mb-4">Personalized training plans that adapt to your progress</p>
              <button
                onClick={() => navigate('/training-hub')}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start Training
              </button>
            </div>
          </div>

          {/* Race Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Race Information</h3>
              <p className="text-gray-600 mb-4">Find and research races, get course details and tips</p>
              <button
                onClick={() => navigate('/race-hub')}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Explore Races
              </button>
            </div>
          </div>

          {/* Mental Training */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mental Training</h3>
              <p className="text-gray-600 mb-4">Stay motivated and mentally strong for your runs</p>
              <button
                onClick={() => navigate('/mental-hub')}
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Mental Hub
              </button>
            </div>
          </div>

          {/* Nutrition */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nutrition</h3>
              <p className="text-gray-600 mb-4">Fuel your training with proper nutrition guidance</p>
              <button
                onClick={() => navigate('/nutrition')}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Nutrition Guide
              </button>
            </div>
          </div>

          {/* Injury Prevention */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Injury Prevention</h3>
              <p className="text-gray-600 mb-4">Stay healthy and prevent common running injuries</p>
              <button
                onClick={() => navigate('/injury-prevention')}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                Stay Healthy
              </button>
            </div>
          </div>

          {/* Running Community */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Running Partners</h3>
              <p className="text-gray-600 mb-4">Connect with runners who match your pace and goals</p>
              <button
                onClick={() => navigate('/profile-build')}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Start Matching
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to take your running to the next level?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of runners who are already using GoFast to reach their goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/profile-build')}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Get Started Free
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoFastPlatform;
