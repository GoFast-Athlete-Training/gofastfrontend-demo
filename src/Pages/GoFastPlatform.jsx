import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoFastPlatform = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Setup Profile",
      description: "Complete your profile to get personalized recommendations",
      icon: "👤",
      path: "/profile-setup-universal",
      priority: true
    },
    {
      title: "Training Hub",
      description: "Personalized workout plans and progress tracking",
      icon: "🏃‍♂️",
      path: "/training-hub"
    },
    {
      title: "Race Planning",
      description: "Race selection, strategy, and preparation tools",
      icon: "🏁",
      path: "/race-hub"
    },
    {
      title: "Run Crew",
      description: "Find and connect with local running groups",
      icon: "👥",
      path: "/crew"
    },
    {
      title: "Matching",
      description: "Find your perfect running partner",
      icon: "💕",
      path: "/pre-match"
    },
    {
      title: "Merch Store",
      description: "Earn points and redeem exclusive gear",
      icon: "🛍️",
      path: "/merch-store"
    },
    {
      title: "Mental Training",
      description: "Mindset and motivation tools",
      icon: "🧠",
      path: "/mental-hub"
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
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-600 hover:text-gray-800"
            >
              Dashboard
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
            Everything you need to train, race, and connect with the running community
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => navigate(feature.path)}
              className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 ${
                feature.priority ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white' : 'bg-white'
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${feature.priority ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={feature.priority ? 'text-orange-100' : 'text-gray-600'}>
                {feature.description}
              </p>
              {feature.priority && (
                <div className="mt-4">
                  <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                    START HERE
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Level Up Your Running?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of runners who are already using GoFast to achieve their goals
          </p>
          <button
            onClick={() => navigate('/dashboard')}
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