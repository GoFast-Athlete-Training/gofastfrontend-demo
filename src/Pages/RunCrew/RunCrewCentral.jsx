import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RunCrewCentral() {
  const navigate = useNavigate();
  const [leaderboardType, setLeaderboardType] = useState('miles'); // 'miles', 'bestSplit', 'calories'
  const [activeTab, setActiveTab] = useState('leaderboard'); // 'feed', 'members', 'leaderboard', 'events'

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

  const leaderboards = {
    miles: [
      { rank: 1, name: 'Emma Rodriguez', value: 52.1, runs: 9, lastRun: 'Dec 15' },
      { rank: 2, name: 'Sarah Johnson', value: 45.2, runs: 8, lastRun: 'Dec 14' },
      { rank: 3, name: 'Mike Chen', value: 38.5, runs: 7, lastRun: 'Dec 13' },
      { rank: 4, name: 'David Lee', value: 32.3, runs: 6, lastRun: 'Dec 12' },
      { rank: 5, name: 'Maria Garcia', value: 28.7, runs: 5, lastRun: 'Dec 11' },
      { rank: 6, name: 'James Wilson', value: 24.1, runs: 4, lastRun: 'Dec 10' }
    ],
    bestSplit: [
      { rank: 1, name: 'Sarah Johnson', value: '6:25', runs: 8, lastRun: 'Dec 14' },
      { rank: 2, name: 'Mike Chen', value: '6:42', runs: 7, lastRun: 'Dec 13' },
      { rank: 3, name: 'Emma Rodriguez', value: '6:58', runs: 9, lastRun: 'Dec 15' },
      { rank: 4, name: 'David Lee', value: '7:15', runs: 6, lastRun: 'Dec 12' },
      { rank: 5, name: 'Maria Garcia', value: '7:32', runs: 5, lastRun: 'Dec 11' },
      { rank: 6, name: 'James Wilson', value: '7:48', runs: 4, lastRun: 'Dec 10' }
    ],
    calories: [
      { rank: 1, name: 'Emma Rodriguez', value: 3120, runs: 9, lastRun: 'Dec 15' },
      { rank: 2, name: 'Sarah Johnson', value: 2780, runs: 8, lastRun: 'Dec 14' },
      { rank: 3, name: 'David Lee', value: 2350, runs: 6, lastRun: 'Dec 12' },
      { rank: 4, name: 'Mike Chen', value: 2240, runs: 7, lastRun: 'Dec 13' },
      { rank: 5, name: 'Maria Garcia', value: 1980, runs: 5, lastRun: 'Dec 11' },
      { rank: 6, name: 'James Wilson', value: 1720, runs: 4, lastRun: 'Dec 10' }
    ]
  };

  // Mock admin status (would come from crew data)
  const isAdmin = true;
  
  const handleBack = () => {
    navigate('/athlete-home');
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
                Return to Athlete Home
              </button>
              {isAdmin && (
                <button 
                  onClick={() => navigate('/runcrew-settings')}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Crew Settings
                </button>
              )}
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
          </div>
        </div>

        {/* Tabs for Group Unity Features */}
        <div className="bg-white rounded-2xl shadow-lg mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-1 px-6">
              <button
                onClick={() => setActiveTab('feed')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'feed'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Feed (Posts & Messages)
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'members'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Members
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'leaderboard'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Leaderboard
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'events'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Run Times & Events
              </button>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'feed' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Forum/Posts feature coming soon</p>
              <p className="text-sm text-gray-400">Share banter, motivation, and updates with your crew</p>
            </div>
          </div>
        )}

        {/* Leaderboard Tab - With Stats & Activity Feed */}
        {activeTab === 'leaderboard' && (
          <>
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">12.5</div>
                <div className="text-sm opacity-90">Total Miles (Week)</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">247</div>
                <div className="text-sm opacity-90">Avg Heart Rate</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">1,840</div>
                <div className="text-sm opacity-90">Calories Burned</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-3xl font-bold mb-2">3rd</div>
                <div className="text-sm opacity-90">Your Crew Rank</div>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Crew Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    E
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Emma Rodriguez</p>
                    <p className="text-sm text-gray-600">Just completed a 5.2 mile run 🏃‍♀️</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Crushed her fastest mile: 6:25! ⚡</p>
                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Mike Chen</p>
                    <p className="text-sm text-gray-600">Morning run done! 4.8 miles 💪</p>
                    <p className="text-xs text-gray-400 mt-1">8 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Crew Leaderboard</h2>
                <span className="text-sm text-gray-600">This Week</span>
              </div>
              <div className="flex gap-2 mb-4">
                <button
                onClick={() => setLeaderboardType('miles')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  leaderboardType === 'miles' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Total Miles
              </button>
              <button
                onClick={() => setLeaderboardType('bestSplit')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  leaderboardType === 'bestSplit' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Best 1-Mile Split
              </button>
              <button
                onClick={() => setLeaderboardType('calories')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  leaderboardType === 'calories' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                  Most Calories
                </button>
              </div>
              <div className="space-y-3">
              {leaderboards[leaderboardType].map((member, index) => (
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
                    <p className="font-bold text-orange-600">
                      {leaderboardType === 'miles' && `${member.value} mi`}
                      {leaderboardType === 'bestSplit' && member.value}
                      {leaderboardType === 'calories' && `${member.value} cal`}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'events' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Run Times & Events feature coming soon</p>
              <p className="text-sm text-gray-400">Schedule group runs and coordinate meetups</p>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
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
        )}

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
}
