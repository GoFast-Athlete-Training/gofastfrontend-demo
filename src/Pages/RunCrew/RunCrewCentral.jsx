import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RunCrewCentral() {
  const navigate = useNavigate();
  const [leaderboardType, setLeaderboardType] = useState('miles'); // 'miles', 'bestSplit', 'calories'

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

  // Mock activity feed (chatter)
  const activityFeed = [
    { id: 1, author: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', message: 'Just completed a 5.2 mile run! Feeling strong 💪', time: '2 hours ago', likes: 12 },
    { id: 2, author: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', message: 'Crushed my fastest mile today: 6:25! Who else is pushing for PRs? ⚡', time: '5 hours ago', likes: 18 },
    { id: 3, author: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', message: 'Morning run done! 4.8 miles through the park. Coffee time ☕', time: '8 hours ago', likes: 8 },
    { id: 4, author: 'David Lee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', message: 'Who\'s running tomorrow at 6am? Let\'s meet at the usual spot!', time: '12 hours ago', likes: 15 }
  ];

  // Mock admin status (would come from crew data)
  const isAdmin = true;
  
  const handleBack = () => {
    navigate('/athlete-home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
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

      {/* Crew Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">🏃‍♂️</span>
            <h1 className="text-3xl font-bold text-gray-900">RunCrew Central</h1>
          </div>
          <h2 className="text-xl text-orange-600 font-semibold">{crew.name}</h2>
        </div>
      </div>

      {/* Main Content - Facebook Groups Style */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Chatter Feed */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  Y
                </div>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-4">
              {activityFeed.map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src={activity.avatar}
                      alt={activity.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-gray-900">{activity.author}</p>
                        <span className="text-xs text-gray-500">·</span>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-gray-800 mb-3">{activity.message}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-sm">{activity.likes}</span>
                        </button>
                        <button className="text-gray-600 hover:text-orange-500">
                          <span className="text-sm">Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Who's Here + Leaderboard */}
          <div className="space-y-6">
            {/* Who's Here (Members) */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-4">Who's Here</h3>
              <div className="space-y-3">
                {crewMembers.map((member) => (
                  <div key={member.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-orange-600 hover:text-orange-700 font-medium">
                View all {crew.members} members
              </button>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-4">Crew Leaderboard</h3>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setLeaderboardType('miles')}
                  className={`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    leaderboardType === 'miles' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Miles
                </button>
                <button
                  onClick={() => setLeaderboardType('bestSplit')}
                  className={`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    leaderboardType === 'bestSplit' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pace
                </button>
                <button
                  onClick={() => setLeaderboardType('calories')}
                  className={`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    leaderboardType === 'calories' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cals
                </button>
              </div>
              <div className="space-y-2">
                {leaderboards[leaderboardType].slice(0, 5).map((member, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' : 
                        index === 1 ? 'bg-gray-400 text-white' : 
                        index === 2 ? 'bg-orange-600 text-white' : 
                        'bg-gray-300 text-gray-700'
                      }`}>
                        {index === 0 ? '1' : index === 1 ? '2' : index === 2 ? '3' : index + 1}
                      </div>
                      <p className="text-sm font-medium text-gray-900">{member.name.split(' ')[0]}</p>
                    </div>
                    <p className="text-xs font-bold text-orange-600">
                      {leaderboardType === 'miles' && `${member.value}mi`}
                      {leaderboardType === 'bestSplit' && member.value}
                      {leaderboardType === 'calories' && `${member.value}`}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-sm text-orange-600 hover:text-orange-700 font-medium">
                View full leaderboard
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-sm p-4 text-white">
              <h3 className="font-bold mb-3">Your Week</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Miles</span>
                  <span className="font-bold">12.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Runs</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Rank</span>
                  <span className="font-bold">3rd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom App Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-around py-3">
            <button className="flex flex-col items-center space-y-1 text-orange-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.5L2 7v9c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-4.5z" />
              </svg>
              <span className="text-xs font-medium">Feed</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-xs font-medium">Members</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-xs font-medium">Leaderboard</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium">Events</span>
            </button>
            {isAdmin && (
              <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs font-medium">Settings</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className="h-20"></div>
    </div>
  );
}
