import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRunning, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const YourePaired = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    // In a real app, this would open a chat
    console.log('Starting chat...');
  };

  const handlePlanRun = () => {
    // In a real app, this would open run planning
    console.log('Planning run...');
  };

  const handleFindMore = () => {
    navigate('/find');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaHeart className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">You're Paired!</h1>
            <p className="text-gray-600">
              Congratulations! You've found a running partner.
            </p>
          </div>

          {/* Match Info */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Sarah"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-gray-600">San Francisco, CA</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                  <span>2.3 miles away</span>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">8:30</div>
                <div className="text-gray-600">Pace match</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">Morning</div>
                <div className="text-gray-600">Time preference</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">What's next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">1</span>
                </div>
                <p className="text-sm text-gray-600">Start a conversation to get to know each other</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">2</span>
                </div>
                <p className="text-sm text-gray-600">Plan your first run together</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 font-bold text-xs">3</span>
                </div>
                <p className="text-sm text-gray-600">Hit the pavement and build your running community!</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleStartChat}
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <FaHeart className="w-5 h-5" />
              <span>Start Chatting</span>
            </button>
            
            <button
              onClick={handlePlanRun}
              className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center space-x-2"
            >
              <FaCalendarAlt className="w-5 h-5" />
              <span>Plan First Run</span>
            </button>
            
            <button
              onClick={handleFindMore}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <FaRunning className="w-4 h-4" />
              <span>Find More Matches</span>
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Great job finding your running partner! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourePaired;
