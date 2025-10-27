import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoFastPlatform = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      title: "Connect",
      description: "Find your running crew and accountability partners",
      icon: "👥",
      path: "/connect",
      color: "bg-orange-500"
    },
    {
      title: "Train", 
      description: "Personalized training plans and progress tracking",
      icon: "🏃‍♂️",
      path: "/training-hub",
      color: "bg-blue-500"
    },
    {
      title: "Shop",
      description: "Earn points and redeem exclusive running gear",
      icon: "🛍️",
      path: "/shop",
      color: "bg-green-500"
    }
  ];

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
            {/* Profile Setup Button - Bottom Right */}
            <button
              onClick={() => navigate('/profile-setup-universal')}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Setup Profile
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
            Connect, Train, and Shop - everything you need to level up your running
          </p>
        </div>

        {/* Main Features - Just 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              onClick={() => navigate(feature.path)}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 text-center"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {feature.description}
              </p>
              <div className={`${feature.color} text-white px-6 py-3 rounded-lg font-bold text-lg`}>
                Get Started
              </div>
            </div>
          ))}
        </div>

        {/* Walkthrough Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How GoFast Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
              <p className="text-gray-600">
                Join RunCrews, find running partners, and build your running community
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Train</h3>
              <p className="text-gray-600">
                Sync your Garmin, track activities, and compete on leaderboards
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn</h3>
              <p className="text-gray-600">
                Earn points for activities and redeem exclusive running gear
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Level Up Your Running?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of runners who are already using GoFast to achieve their goals
          </p>
          <button
            onClick={() => navigate('/connect')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoFastPlatform;