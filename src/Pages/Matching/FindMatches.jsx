import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindMatches = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [swipedMatches, setSwipedMatches] = useState([]);

  // Mock runner data
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
    },
    {
      id: 4,
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "10:15",
      distance: "3-5 miles",
      goalRace: "5K",
      timePreference: "Afternoon",
      availability: ["Tue", "Thu", "Sat"],
      bio: "Getting back into running after a break. Love the social aspect!"
    },
    {
      id: 5,
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "8:00",
      distance: "5-8 miles",
      goalRace: "Half Marathon",
      timePreference: "Morning",
      availability: ["Mon", "Wed", "Fri", "Sun"],
      bio: "Morning person who loves sunrise runs. Training for multiple half marathons this year."
    },
    {
      id: 6,
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "9:30",
      distance: "3-5 miles",
      goalRace: "10K",
      timePreference: "Evening",
      availability: ["Tue", "Thu", "Sat"],
      bio: "Casual runner who enjoys the mental health benefits. Always encouraging!"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setMatches(mockRunners);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSwipe = (direction) => {
    const currentMatch = matches[currentIndex];
    if (direction === 'right') {
      // Like/For Me
      setSwipedMatches(prev => [...prev, { ...currentMatch, action: 'liked' }]);
    } else {
      // Pass/Not For Me
      setSwipedMatches(prev => [...prev, { ...currentMatch, action: 'passed' }]);
    }
    setCurrentIndex(prev => prev + 1);
  };

  const handleInvite = (match) => {
    setSelectedMatch(match);
    setShowInviteModal(true);
  };

  const handleMessage = (match) => {
    alert(`Opening chat with ${match.name}... (This would open a chat interface)`);
  };

  const handleSendInvite = (inviteData) => {
    // Simulate sending invite
    setShowInviteModal(false);
    setSelectedMatch(null);
    // Navigate to request sent page
    navigate('/request-sent');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Finding Your Match...</h2>
          <p className="text-gray-600">Searching for runners in your area</p>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/crew')}
                className="text-gray-600 hover:text-gray-800"
              >
                My Crew
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="text-gray-600 hover:text-gray-800"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Match</h1>
          <p className="text-gray-600">Connect with runners who share your pace and goals</p>
        </div>

        {currentIndex >= matches.length ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">You've seen everyone!</h2>
            <p className="text-gray-600 mb-6">Check back later for new runners in your area</p>
            <button
              onClick={() => navigate('/crew')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              View Your Crew
            </button>
          </div>
        ) : (
          <div className="max-w-sm mx-auto">
            {/* Single Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Profile Image */}
              <div className="relative h-96">
                <img 
                  src={matches[currentIndex]?.avatar} 
                  alt={matches[currentIndex]?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-900">
                    {currentIndex + 1} of {matches.length}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{matches[currentIndex]?.name}</h3>
                    <p className="text-gray-600">{matches[currentIndex]?.city}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">{matches[currentIndex]?.pace}</div>
                    <div className="text-sm text-gray-500">min/mile</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{matches[currentIndex]?.distance}</div>
                    <div className="text-sm text-gray-600">Distance</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{matches[currentIndex]?.goalRace}</div>
                    <div className="text-sm text-gray-600">Goal Race</div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Available:</p>
                  <div className="flex flex-wrap gap-1">
                    {matches[currentIndex]?.availability.map((day) => (
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
                <p className="text-gray-600 mb-6">{matches[currentIndex]?.bio}</p>

                {/* Match Score */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {Math.floor(Math.random() * 20) + 80}/100
                  </div>
                  <div className="text-sm text-gray-600">Match Score</div>
                </div>

                {/* Performance Section */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Performance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pace:</span>
                      <span className="font-medium">{matches[currentIndex]?.pace} / mile</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Training Goal:</span>
                      <span className="font-medium">{matches[currentIndex]?.goalRace} - PR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preferred Time:</span>
                      <span className="font-medium">{matches[currentIndex]?.timePreference}</span>
                    </div>
                  </div>
                </div>

                {/* Personality Section */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Personality</h4>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-gray-600">Vibe:</span>
                      <span className="font-medium ml-2">Zoned In</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium ml-2">{matches[currentIndex]?.city}</span>
                    </div>
                  </div>
                </div>

                {/* Swipe Actions */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleSwipe('left')}
                    className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Skip
                  </button>
                  <button
                    onClick={() => handleInvite(matches[currentIndex])}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                  >
                    Pair me
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Invite Modal */}
      {showInviteModal && selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Invite {selectedMatch.name} to Run
            </h3>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleSendInvite({
                date: formData.get('date'),
                time: formData.get('time'),
                location: formData.get('location'),
                message: formData.get('message')
              });
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g., Golden Gate Park"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (optional)</label>
                  <textarea
                    name="message"
                    placeholder="Add a personal message..."
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMatches;
