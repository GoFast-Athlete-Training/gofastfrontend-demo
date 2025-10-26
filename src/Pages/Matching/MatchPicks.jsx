import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MatchingHome = () => {
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
    navigate('/athlete-profile');
  };

  const handleStartMatching = () => {
    // Check if they have match preferences
    const matchPreferences = localStorage.getItem('matchPreferences');
    if (matchPreferences) {
      navigate('/find');
    } else {
      navigate('/match-profile');
    }
  };

  const handleSkip = () => {
    navigate('/find');
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
            Hey! We're gonna take 2-3 minutes of your time
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Set up your profile and we'll show you runners who match your pace and goals
          </p>
          <p className="text-lg text-gray-500">
            👆 Click on any runner below to get started
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
            onClick={handleStartMatching}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Matching
          </button>
          <p className="text-gray-500 mt-4">
            See who's available in your area
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
                  Build Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingHome;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MatchingHome = () => {
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
    navigate('/athlete-profile');
  };

  const handleSkip = () => {
    navigate('/find');
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
            Hey! We're gonna take 2-3 minutes of your time
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Set up your profile and we'll show you runners who match your pace and goals
          </p>
          <p className="text-lg text-gray-500">
            👆 Click on any runner below to get started
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
                  Build Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingHome;
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
              onClick={() => navigate('/athlete-profile')}
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
                onClick={() => navigate('/athlete-profile')}
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
                onClick={() => navigate('/athlete-profile')}
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
