import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaClock, FaRunning } from 'react-icons/fa';

const MatchProfile = () => {
  const navigate = useNavigate();

  // Mock profile data
  const profile = {
    name: "Sarah Johnson",
    age: 28,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    city: "San Francisco, CA",
    pace: "8:30",
    distance: "5-8 miles",
    goalRace: "Half Marathon",
    timePreference: "Morning",
    availability: ["Mon", "Wed", "Fri"],
    bio: "Love morning runs and coffee! Training for my first half marathon. Looking for someone to keep me motivated and share the journey with.",
    interests: ["Coffee", "Yoga", "Hiking", "Photography", "Cooking"],
    achievements: ["5K PR: 24:30", "10K PR: 52:15", "Completed 3 half marathons"],
    runningStyle: "Steady pace runner who enjoys conversation during runs"
  };

  const handleSendRequest = () => {
    navigate('/request-sent');
  };

  const handleBack = () => {
    navigate('/find-matches');
  };

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
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Photo */}
          <div className="relative h-80">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
              <span className="text-sm font-medium text-gray-900">{profile.age}</span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                <span className="text-sm">{profile.city}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <FaRunning className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <div className="text-sm text-gray-600">Pace</div>
                <div className="font-bold text-gray-900">{profile.pace}/mile</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <FaClock className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <div className="text-sm text-gray-600">Distance</div>
                <div className="font-bold text-gray-900">{profile.distance}</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Goal Race:</span>
                <span className="font-medium">{profile.goalRace}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preferred Time:</span>
                <span className="font-medium">{profile.timePreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available:</span>
                <span className="font-medium">{profile.availability.join(', ')}</span>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">About</h3>
              <p className="text-gray-700">{profile.bio}</p>
            </div>

            {/* Running Style */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Running Style</h3>
              <p className="text-gray-700">{profile.runningStyle}</p>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Achievements</h3>
              <div className="space-y-1">
                {profile.achievements.map((achievement, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    • {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={handleSendRequest}
            className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
          >
            <FaUser className="w-5 h-5" />
            <span>Send Running Request</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchProfile;
