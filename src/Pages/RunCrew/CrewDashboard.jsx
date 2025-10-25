import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrewDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock crew data
  const crew = {
    name: 'Morning Warriors',
    joinCode: 'ABC123',
    members: 8,
    totalRuns: 24,
    thisWeek: 3
  };

  const upcomingRuns = [
    {
      id: 1,
      date: 'Tomorrow',
      time: '7:00 AM',
      location: 'Central Park',
      distance: '5K',
      participants: 5,
      organizer: 'Sarah'
    },
    {
      id: 2,
      date: 'Saturday',
      time: '8:00 AM',
      location: 'Brooklyn Bridge',
      distance: '10K',
      participants: 7,
      organizer: 'Mike'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Sarah',
      action: 'completed a 5K run',
      time: '2 hours ago',
      distance: '5.2 miles',
      pace: '8:30/mile'
    },
    {
      id: 2,
      user: 'Mike',
      action: 'joined the crew',
      time: '1 day ago',
      distance: null,
      pace: null
    },
    {
      id: 3,
      user: 'Emma',
      action: 'completed a 10K run',
      time: '2 days ago',
      distance: '10.1 miles',
      pace: '9:15/mile'
    }
  ];

  const handleShareCode = () => {
    navigator.clipboard.writeText(crew.joinCode);
    alert(`Join code ${crew.joinCode} copied to clipboard!`);
  };

  const handleJoinRun = (run) => {
    alert(`Joined ${run.organizer}'s run on ${run.date}!`);
  };

  const handleBack = () => {
    navigate('/connect');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={handleBack} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-gray-900">GoFast</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-orange-600">1,250 pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Crew Header */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{crew.name}</h1>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👥</span>
                <span className="font-medium">{crew.members} members</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏃‍♂️</span>
                <span className="font-medium">{crew.totalRuns} total runs</span>
              </div>
            </div>
            
            <div className="bg-orange-100 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="text-sm text-gray-600">Join Code</div>
                  <div className="text-2xl font-bold text-orange-600 font-mono">{crew.joinCode}</div>
                </div>
                <button
                  onClick={handleShareCode}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('runs')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'runs'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Runs
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'activity'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Activity
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{crew.members}</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">🏃‍♂️</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{crew.thisWeek}</div>
                <div className="text-sm text-gray-600">Runs This Week</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{crew.totalRuns}</div>
                <div className="text-sm text-gray-600">Total Runs</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  🏃‍♂️ Start a Run
                </button>
                <button className="bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  📅 Schedule Run
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Runs Tab */}
        {activeTab === 'runs' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Runs</h3>
            {upcomingRuns.map((run) => (
              <div key={run.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold">🏃‍♂️</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{run.date} at {run.time}</div>
                      <div className="text-sm text-gray-600">{run.location} • {run.distance}</div>
                      <div className="text-sm text-gray-500">{run.participants} going • Organized by {run.organizer}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleJoinRun(run)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Join Run
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
            {recentActivity.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      <span className="font-bold">{activity.user}</span> {activity.action}
                    </div>
                    {activity.distance && (
                      <div className="text-sm text-gray-600">
                        {activity.distance} • {activity.pace}
                      </div>
                    )}
                    <div className="text-sm text-gray-500">{activity.time}</div>
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

export default CrewDashboard;
