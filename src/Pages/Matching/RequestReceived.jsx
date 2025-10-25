import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestReceived = () => {
  const navigate = useNavigate();
  const [showRequestModal, setShowRequestModal] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState({
    id: 1,
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    pace: "9:30",
    distance: "3-5 miles",
    time: "Tomorrow, 7:00 AM",
    location: "Golden Gate Park",
    message: "Hey! I saw we have similar paces and goals. Would love to run together!",
    matchScore: "87/100"
  });

  const handleAccept = () => {
    alert("Run request accepted! You can now coordinate details.");
    setShowRequestModal(false);
    navigate('/crew');
  };

  const handleDecline = () => {
    alert("Run request declined.");
    setShowRequestModal(false);
    navigate('/user-home');
  };

  const handleViewProfile = () => {
    alert("Opening Alex's profile...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-6">
          {/* Notification Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏃‍♂️</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">New Run Request!</h1>
            <p className="text-gray-600">Someone wants to run with you</p>
          </div>

          {/* Request Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={selectedRequest.avatar} 
                alt={selectedRequest.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedRequest.name}</h3>
                <p className="text-sm text-gray-600">{selectedRequest.pace} min/mile</p>
                <div className="text-sm text-blue-600 font-medium">
                  {selectedRequest.matchScore} Match Score
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 mb-3">{selectedRequest.message}</p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Run Details:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-20">📅 When:</span>
                    <span className="text-gray-900">{selectedRequest.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-20">📍 Where:</span>
                    <span className="text-gray-900">{selectedRequest.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-20">🏃‍♂️ Distance:</span>
                    <span className="text-gray-900">{selectedRequest.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleAccept}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              ✅ Accept Run
            </button>
            
            <button
              onClick={handleViewProfile}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              View Profile
            </button>
            
            <button
              onClick={handleDecline}
              className="w-full text-gray-500 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6 text-center">
            You can always change your mind later
          </p>
        </div>
      </div>

      {/* Request Modal (Alternative View) */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-sm w-full p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Run Request</h3>
              <p className="text-sm text-gray-600">from {selectedRequest.name}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm mb-3">{selectedRequest.message}</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600">
                  <div>📅 {selectedRequest.time}</div>
                  <div>📍 {selectedRequest.location}</div>
                  <div>🏃‍♂️ {selectedRequest.distance}</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={handleDecline}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 text-sm"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 text-sm"
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

export default RequestReceived;
