import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRunning, FaUsers, FaHeart, FaCog } from 'react-icons/fa';

const MatchingHome = () => {
  const navigate = useNavigate();

  const stats = {
    totalMatches: 12,
    activeConnections: 3,
    upcomingRuns: 2,
    completedRuns: 8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
              <span className="font-bold text-gray-900">GoFast</span>
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <FaCog className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Ready to find your next running partner?</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <FaUsers className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stats.totalMatches}</div>
            <div className="text-sm text-gray-600">Total Matches</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <FaHeart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stats.activeConnections}</div>
            <div className="text-sm text-gray-600">Active Connections</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4 mb-8">
          <button
            onClick={() => navigate('/find')}
            className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
          >
            <FaRunning className="w-5 h-5" />
            <span>Find New Matches</span>
          </button>
          
          <button
            onClick={() => navigate('/request-received')}
            className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center space-x-2"
          >
            <FaHeart className="w-5 h-5 text-red-500" />
            <span>View Requests</span>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <FaRunning className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New match found!</p>
                <p className="text-xs text-gray-600">Sarah Johnson - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FaHeart className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Run completed</p>
                <p className="text-xs text-gray-600">With Mike Chen - Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingHome;
