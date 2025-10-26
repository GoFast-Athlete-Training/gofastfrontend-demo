import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaTimes, FaMapMarkerAlt, FaClock, FaRunning } from 'react-icons/fa';

const FindMatches = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock matches data
  const matches = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "8:30",
      distance: "5-8 miles",
      goalRace: "Half Marathon",
      timePreference: "Morning",
      availability: ["Mon", "Wed", "Fri"],
      bio: "Love morning runs and coffee! Training for my first half marathon. Looking for someone to keep me motivated.",
      interests: ["Coffee", "Yoga", "Hiking", "Photography"]
    },
    {
      id: 2,
      name: "Mike Chen",
      age: 32,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "9:00",
      distance: "3-5 miles",
      goalRace: "10K",
      timePreference: "Evening",
      availability: ["Tue", "Thu", "Sat"],
      bio: "Evening runner who enjoys exploring the city. Always up for a good conversation and discovering new routes!",
      interests: ["Music", "Cooking", "Travel", "Tech"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 26,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "7:45",
      distance: "8-12 miles",
      goalRace: "Marathon",
      timePreference: "Morning",
      availability: ["Mon", "Wed", "Sun"],
      bio: "Serious marathon training. Looking for dedicated running partners who share the same commitment to improvement.",
      interests: ["Nutrition", "Crossfit", "Reading", "Meditation"]
    }
  ];

  const currentMatch = matches[currentIndex];

  const handleLike = () => {
    // In a real app, this would send a like/request
    console.log('Liked:', currentMatch.name);
    nextMatch();
  };

  const handlePass = () => {
    // In a real app, this would record a pass
    console.log('Passed on:', currentMatch.name);
    nextMatch();
  };

  const nextMatch = () => {
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // No more matches
      navigate('/matching-home');
    }
  };

  const handleBack = () => {
    navigate('/match-profile-setup');
  };

  if (!currentMatch) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No More Matches</h2>
          <p className="text-gray-600 mb-6">Check back later for new runners!</p>
          <button
            onClick={() => navigate('/matching-home')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
              <span className="font-bold text-gray-900">GoFast</span>
            </div>
            <div className="text-sm text-gray-500">
              {currentIndex + 1} of {matches.length}
            </div>
          </div>
        </div>
      </div>

      {/* Match Card */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Photo */}
          <div className="relative h-80">
            <img 
              src={currentMatch.avatar} 
              alt={currentMatch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
              <span className="text-sm font-medium text-gray-900">{currentMatch.age}</span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{currentMatch.name}</h2>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                <span className="text-sm">{currentMatch.city}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <FaRunning className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <div className="text-sm text-gray-600">Pace</div>
                <div className="font-bold text-gray-900">{currentMatch.pace}/mile</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <FaClock className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <div className="text-sm text-gray-600">Distance</div>
                <div className="font-bold text-gray-900">{currentMatch.distance}</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Goal Race:</span>
                <span className="font-medium">{currentMatch.goalRace}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preferred Time:</span>
                <span className="font-medium">{currentMatch.timePreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available:</span>
                <span className="font-medium">{currentMatch.availability.join(', ')}</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-700 mb-4">{currentMatch.bio}</p>

            {/* Interests */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {currentMatch.interests.map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-8 mt-8">
          <button
            onClick={handlePass}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FaTimes className="w-8 h-8 text-red-500" />
          </button>
          <button
            onClick={handleLike}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FaHeart className="w-8 h-8 text-green-500" />
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Swipe right to like, left to pass
        </p>
      </div>
    </div>
  );
};

export default FindMatches;
