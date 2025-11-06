import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreMatch = () => {
  const navigate = useNavigate();
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);

  // Mock runner data to show potential matches
  const mockRunners = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "8:30",
      distance: "5-8 miles",
      goalRace: "Half Marathon",
      timePreference: "Morning",
      availability: ["Mon", "Wed", "Fri"],
      bio: "Love morning runs and coffee! Training for my first half marathon."
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "9:00",
      distance: "3-5 miles",
      goalRace: "10K",
      timePreference: "Evening",
      availability: ["Tue", "Thu", "Sat"],
      bio: "Evening runner who enjoys exploring the city. Always up for a good conversation!"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "7:45",
      distance: "8-12 miles",
      goalRace: "Marathon",
      timePreference: "Morning",
      availability: ["Mon", "Wed", "Sun"],
      bio: "Serious marathon training. Looking for dedicated running partners."
    }
  ];

  const handleCardClick = (runner) => {
    setShowSignupPrompt(true);
  };

  const handleGetStarted = () => {
    navigate('/match-profile-setup');
  };

  const handleSkip = () => {
    navigate('/find-matches');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <button
              onClick={handleSkip}
              className="text-gray-600 hover:text-gray-800"
            >
              Skip Setup
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Running Match
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with runners who share your pace and goals
          </p>
          <p className="text-lg text-gray-500">
            Click on any runner below to get started
          </p>
        </div>

        {/* Match Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockRunners.map((runner) => (
            <div 
              key={runner.id} 
              onClick={() => handleCardClick(runner)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={runner.avatar} 
                    alt={runner.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{runner.name}</h3>
                    <p className="text-sm text-gray-600">{runner.city}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pace:</span>
                    <span className="font-medium">{runner.pace} min/mile</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-medium">{runner.distance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Goal:</span>
                    <span className="font-medium">{runner.goalRace}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{runner.timePreference}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Available:</p>
                  <div className="flex flex-wrap gap-1">
                    {runner.availability.map((day) => (
                      <span 
                        key={day}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 mb-4">{runner.bio}</p>

                {/* CTA */}
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-orange-700 font-medium">
                    Click to connect with {runner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={handleGetStarted}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Started - Find Your Matches
          </button>
          <p className="text-gray-500 mt-4">
            Takes 2 minutes • No login required
          </p>
        </div>
      </div>

      {/* Signup Prompt Modal */}
      {showSignupPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Connect?
              </h3>
              <p className="text-gray-600 mb-6">
                Set up your profile in 2 minutes to start connecting with runners like these!
              </p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSignupPrompt(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50"
                >
                  Keep Browsing
                </button>
                <button
                  onClick={handleGetStarted}
                  className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreMatch;
