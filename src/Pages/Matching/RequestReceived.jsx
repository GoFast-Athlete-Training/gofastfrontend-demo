import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaTimes, FaMapMarkerAlt, FaClock, FaRunning } from 'react-icons/fa';

const RequestReceived = () => {
  const navigate = useNavigate();

  // Mock received requests
  const requests = [
    {
      id: 1,
      name: "Alex Thompson",
      age: 29,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "8:15",
      distance: "5-8 miles",
      goalRace: "Half Marathon",
      timePreference: "Morning",
      message: "Hey! I saw we have similar paces and goals. Would love to run together sometime!",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      name: "Jessica Park",
      age: 26,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      city: "San Francisco, CA",
      pace: "9:30",
      distance: "3-5 miles",
      goalRace: "10K",
      timePreference: "Evening",
      message: "Looking for a running buddy for evening runs around the city!",
      timeAgo: "1 day ago"
    }
  ];

  const handleAccept = (requestId) => {
    console.log('Accepted request:', requestId);
    navigate('/youre-paired');
  };

  const handleDecline = (requestId) => {
    console.log('Declined request:', requestId);
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
              {requests.length} requests
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Running Requests</h1>
          <p className="text-gray-600">People who want to run with you!</p>
        </div>

        {requests.length === 0 ? (
          <div className="text-center py-12">
            <FaHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">No requests yet</h3>
            <p className="text-gray-600 mb-6">Keep swiping to find matches!</p>
            <button
              onClick={() => navigate('/find-matches')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Find Matches
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div key={request.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={request.avatar} 
                      alt={request.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{request.name}, {request.age}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                        <span>{request.city}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{request.timeAgo}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-4 border-b border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <FaRunning className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Pace</div>
                      <div className="text-sm font-medium">{request.pace}</div>
                    </div>
                    <div>
                      <FaClock className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Distance</div>
                      <div className="text-sm font-medium">{request.distance}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Goal</div>
                      <div className="text-sm font-medium">{request.goalRace}</div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="p-4 border-b border-gray-100">
                  <p className="text-gray-700 text-sm">{request.message}</p>
                </div>

                {/* Actions */}
                <div className="p-4">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDecline(request.id)}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                    >
                      <FaTimes className="w-4 h-4" />
                      <span>Decline</span>
                    </button>
                    <button
                      onClick={() => handleAccept(request.id)}
                      className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <FaHeart className="w-4 h-4" />
                      <span>Accept</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestReceived;
