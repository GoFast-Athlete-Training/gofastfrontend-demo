import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaTimes, FaMapMarkerAlt, FaClock, FaRunning } from 'react-icons/fa';

const MatchPicks = () => {
  const navigate = useNavigate();

  // Mock curated matches
  const picks = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "8:30",
      distance: "5-8 miles",
      goalRace: "Half Marathon",
      timePreference: "Morning",
      compatibility: 95,
      reason: "Perfect pace match and same morning schedule!"
    },
    {
      id: 2,
      name: "Mike Chen",
      age: 32,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "9:00",
      distance: "3-5 miles",
      goalRace: "10K",
      timePreference: "Evening",
      compatibility: 88,
      reason: "Great conversational runner with similar goals"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 26,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "7:45",
      distance: "8-12 miles",
      goalRace: "Marathon",
      timePreference: "Morning",
      compatibility: 82,
      reason: "Serious training partner for long runs"
    }
  ];

  const handleLike = (pickId) => {
    console.log('Liked pick:', pickId);
    navigate('/request-sent');
  };

  const handlePass = (pickId) => {
    console.log('Passed on pick:', pickId);
    // Remove from list in real app
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/matching-home')}
              className="text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
              <span className="font-bold text-gray-900">GoFast</span>
            </div>
            <div className="text-sm text-gray-500">
              {picks.length} picks
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Perfect Matches</h1>
          <p className="text-gray-600">Curated based on your preferences and compatibility</p>
        </div>

        <div className="space-y-4">
          {picks.map((pick) => (
            <div key={pick.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <img 
                    src={pick.avatar} 
                    alt={pick.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{pick.name}, {pick.age}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                      <span>{pick.city}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">{pick.compatibility}%</div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-4 border-b border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <FaRunning className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Pace</div>
                    <div className="text-sm font-medium">{pick.pace}</div>
                  </div>
                  <div>
                    <FaClock className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Distance</div>
                    <div className="text-sm font-medium">{pick.distance}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Goal</div>
                    <div className="text-sm font-medium">{pick.goalRace}</div>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="p-4 border-b border-gray-100">
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-orange-700 font-medium">Why this match?</p>
                  <p className="text-sm text-orange-600">{pick.reason}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4">
                <div className="flex space-x-3">
                  <button
                    onClick={() => handlePass(pick.id)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaTimes className="w-4 h-4" />
                    <span>Pass</span>
                  </button>
                  <button
                    onClick={() => handleLike(pick.id)}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaHeart className="w-4 h-4" />
                    <span>Connect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/find-matches')}
            className="bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            Browse More Matches
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchPicks;
