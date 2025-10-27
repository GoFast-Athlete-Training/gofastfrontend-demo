import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartHereExplainer = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      title: "Connect",
      description: "Find your running crew and accountability partners",
      icon: "🤝",
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
      icon: "🛒",
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
              <span className="text-xl font-bold text-gray-900">GoFast App</span>
            </div>
            {/* Profile Setup Button - Bottom Right */}
            <button
              onClick={() => navigate('/athlete-create-profile')}
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
            Welcome to GoFast
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with your crew, track your progress, and earn rewards
          </p>
        </div>

        {/* Main Features - Bigger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              onClick={() => navigate(feature.path)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <div className={`${feature.color} text-white px-4 py-2 rounded-lg font-bold`}>
                Get Started
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default StartHereExplainer;