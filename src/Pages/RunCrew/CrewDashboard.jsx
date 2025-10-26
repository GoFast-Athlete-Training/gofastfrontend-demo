import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrewDashboard = () => {
  const navigate = useNavigate();

  // Mock crew data
  const crew = {
    name: 'Morning Warriors',
    joinCode: 'ABC123',
    members: 8
  };

  const crewMembers = [
    { id: 1, name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', status: 'Active', isTopMiler: true },
    { id: 2, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', status: 'Active' },
    { id: 3, name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', status: 'Active' },
    { id: 4, name: 'David Lee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', status: 'Active' },
    { id: 5, name: 'Maria Garcia', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', status: 'Active' },
    { id: 6, name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face', status: 'Active' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Emma Rodriguez', miles: 52.1, runs: 9, lastRun: 'Dec 15' },
    { rank: 2, name: 'Sarah Johnson', miles: 45.2, runs: 8, lastRun: 'Dec 14' },
    { rank: 3, name: 'Mike Chen', miles: 38.5, runs: 7, lastRun: 'Dec 13' },
    { rank: 4, name: 'David Lee', miles: 32.3, runs: 6, lastRun: 'Dec 12' },
    { rank: 5, name: 'Maria Garcia', miles: 28.7, runs: 5, lastRun: 'Dec 11' },
    { rank: 6, name: 'James Wilson', miles: 24.1, runs: 4, lastRun: 'Dec 10' }
  ];

  const handleBack = () => {
    navigate('/connect');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
            
            {/* Navigation Menu */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => navigate('/athlete-home')}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Dashboard
              </button>
              <button 
                onClick={() => navigate('/settings')}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Settings
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="font-bold text-orange-600">1,250 pts</span>
                <span className="text-sm text-gray-500">(Personal)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Crew Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">🏃‍♂️</span>
                <h1 className="text-3xl font-bold text-gray-900">RunCrew Central</h1>
              </div>
              <h2 className="text-xl text-orange-600 font-semibold mb-2">{crew.name}</h2>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">👥</span>
                  <span className="font-medium">{crew.members} members</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Join Code</div>
              <div className="text-2xl font-bold text-orange-600 font-mono">{crew.joinCode}</div>
            </div>
          </div>
        </div>

        {/* Personal Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">38.5</div>
              <div className="text-sm text-gray-600">Miles This Week</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Runs</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">3rd</div>
              <div className="text-sm text-gray-600">Crew Rank</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">Dec 13</div>
              <div className="text-sm text-gray-600">Last Run</div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Crew Members */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Crew Members</h2>
              <span className="text-sm text-gray-600">{crewMembers.length} active</span>
            </div>
            <div className="space-y-3">
              {crewMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {member.isTopMiler && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-yellow-800 text-xs">👑</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-green-600">{member.status}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Leaderboard */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Miles Leaderboard</h2>
              <span className="text-sm text-gray-600">This Week</span>
            </div>
            <div className="space-y-3">
              {leaderboard.map((member, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    index === 0 ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-yellow-500 text-white' : 
                      index === 1 ? 'bg-gray-400 text-white' : 
                      index === 2 ? 'bg-orange-600 text-white' : 
                      'bg-gray-300 text-gray-700'
                    }`}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : member.rank}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <span>{member.runs} runs</span>
                        <span>•</span>
                        <span>Last: {member.lastRun}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">{member.miles} mi</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Want More Members Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Want More Members?</h3>
            <p className="text-gray-600 mb-4">Share your crew code to invite friends</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-3xl font-bold text-orange-600 font-mono">{crew.joinCode}</div>
              <button
                onClick={() => {
                  const message = `Hi! I created a run crew on GoFast. Go to runcrewjoin.gofastcrushgoals.com, click "Join a Crew", and use this code: ${crew.joinCode}`;
                  navigator.clipboard.writeText(message);
                  alert('Share message copied to clipboard!');
                }}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Share Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewDashboard;
