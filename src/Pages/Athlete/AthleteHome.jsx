import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AthleteHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('requests');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Mock incoming requests
  const mockRequests = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      pace: "8:30",
      distance: "5-8 miles",
      time: "Tomorrow, 7:00 AM",
      location: "Golden Gate Park",
      message: "Hey! I saw we have similar paces and goals. Would love to run together!"
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      pace: "9:00",
      distance: "3-5 miles",
      time: "Friday, 6:30 PM",
      location: "Mission District",
      message: "Looking for a running partner for my evening runs. Interested?"
    }
  ];

  // Mock sent requests
  const mockSentRequests = [
    {
      id: 1,
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      pace: "9:30",
      distance: "3-5 miles",
      time: "Tomorrow, 7:00 AM",
      location: "Golden Gate Park",
      status: "pending"
    },
    {
      id: 2,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      pace: "8:45",
      distance: "5-8 miles",
      time: "Saturday, 8:00 AM",
      location: "Presidio",
      status: "accepted"
    }
  ];

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setShowRequestModal(true);
  };

  const handleAccept = (request) => {
    alert(`Accepted ${request.name}'s run request!`);
    setShowRequestModal(false);
    setSelectedRequest(null);
  };

  const handleDecline = (request) => {
    alert(`Declined ${request.name}'s run request.`);
    setShowRequestModal(false);
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/find')}
                className="text-gray-600 hover:text-gray-800"
              >
                Find Matches
              </button>
              <button
                onClick={() => navigate('/crew')}
                className="text-gray-600 hover:text-gray-800"
              >
                My Crew
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">You've earned 80 points this week</h1>
                <div className="flex items-center">
                  <span className="text-4xl mr-2">🏃‍♂️</span>
                  <span className="text-xl font-bold">Keep Going!</span>
                </div>
              </div>
              <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                Progress
              </button>
            </div>
          </div>
        </div>

        {/* Personal Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🔥</span>
              <span className="font-bold text-gray-900">Weekly Streak</span>
            </div>
            <p className="text-sm text-gray-600">You've run 4 days in a row</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🎯</span>
              <span className="font-bold text-gray-900">Your Goal</span>
            </div>
            <p className="text-sm text-gray-600">Sub-30 min 5K</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏠</span>
              <span className="font-bold text-gray-900">Gear Unlock</span>
            </div>
            <p className="text-sm text-gray-600">10 points away from new gear</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏆</span>
              <span className="font-bold text-gray-900">Badge Milestones</span>
            </div>
            <p className="text-sm text-gray-600">Tap to see details</p>
          </div>
        </div>

        {/* Upcoming Runs */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Runs</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">Morning Trail Run</h3>
                <span className="text-sm text-gray-500">5K</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Tomorrow, 7:00 AM</p>
              <p className="text-sm text-gray-600 mb-3">@ Riverside Park</p>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-2 text-sm text-gray-500">+2 more</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">Weekend Long Run</h3>
                <span className="text-sm text-gray-500">5K</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Sunday, 8:30 AM</p>
              <p className="text-sm text-gray-600 mb-3">@ Central Park Loop</p>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-2 text-sm text-gray-500">+2 more</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Buddies */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Buddies</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                  alt="Michal R"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">Michal R.</h3>
                  <p className="text-sm text-gray-600">8:05 Pace</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">5K</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">10K</span>
                  </div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Connect
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                  alt="Sara L"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">Sara L.</h3>
                  <p className="text-sm text-gray-600">7:45 Pace</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">10K</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Half</span>
                  </div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Running Clubs */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Running Clubs</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg">🏃‍♂️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">Boston Running Club</h3>
                  <p className="text-sm text-gray-600">Urban Running group, all Pace welcome</p>
                  <p className="text-sm text-gray-500">243 members</p>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'requests'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My Requests
              {mockRequests.length > 0 && (
                <span className="ml-2 bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                  {mockRequests.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'sent'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sent Requests
            </button>
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'explore'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'requests' && (
          <div>
            {mockRequests.length > 0 ? (
              <div className="space-y-4">
                {mockRequests.map((request) => (
                  <div 
                    key={request.id}
                    onClick={() => handleRequestClick(request)}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <img 
                        src={request.avatar} 
                        alt={request.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{request.name}</h3>
                          <span className="text-sm text-gray-500">{request.pace} min/mile</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{request.message}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>📅 {request.time}</span>
                          <span>📍 {request.location}</span>
                          <span>🏃‍♂️ {request.distance}</span>
                        </div>
                      </div>
                      <div className="text-orange-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No requests yet</h3>
                <p className="text-gray-600 mb-4">Start finding matches to get run requests!</p>
                <button
                  onClick={() => navigate('/find')}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Find Matches
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'sent' && (
          <div>
            {mockSentRequests.length > 0 ? (
              <div className="space-y-4">
                {mockSentRequests.map((request) => (
                  <div 
                    key={request.id}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <img 
                        src={request.avatar} 
                        alt={request.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{request.name}</h3>
                          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                            request.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {request.status === 'pending' ? '⏳ Pending' : '✅ Accepted'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>📅 {request.time}</span>
                          <span>📍 {request.location}</span>
                          <span>🏃‍♂️ {request.distance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No sent requests</h3>
                <p className="text-gray-600 mb-4">Start sending run requests to build your crew!</p>
                <button
                  onClick={() => navigate('/find')}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Find Matches
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => navigate('/find')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Find Matches</h3>
                <p className="text-gray-600 text-sm">Discover new running partners</p>
              </div>
            </div>

            <div 
              onClick={() => navigate('/crew')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">My Crew</h3>
                <p className="text-gray-600 text-sm">Manage your running partners</p>
              </div>
            </div>

            <div 
              onClick={() => navigate('/matching-profile')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Profile</h3>
                <p className="text-gray-600 text-sm">Update your preferences</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Request Modal */}
      {showRequestModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={selectedRequest.avatar} 
                alt={selectedRequest.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">{selectedRequest.name}</h3>
                <p className="text-sm text-gray-600">{selectedRequest.pace} min/mile</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600 mb-2">{selectedRequest.message}</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-600">
                  <div>📅 {selectedRequest.time}</div>
                  <div>📍 {selectedRequest.location}</div>
                  <div>🏃‍♂️ {selectedRequest.distance}</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleDecline(selectedRequest)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50"
              >
                Decline
              </button>
              <button
                onClick={() => handleAccept(selectedRequest)}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AthleteHome;
