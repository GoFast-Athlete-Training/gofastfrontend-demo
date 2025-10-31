import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RunCrewCentral() {
  const navigate = useNavigate();
  const [leaderboardType, setLeaderboardType] = useState('miles');
  const [messageInput, setMessageInput] = useState('');

  // Mock crew data
  const crew = {
    name: 'Morning Warriors',
    joinCode: 'ABC123',
    members: 8
  };

  const crewMembers = [
    { id: 1, name: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', status: 'Active', isTopMiler: true, initials: 'ER' },
    { id: 2, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', status: 'Active', initials: 'SJ' },
    { id: 3, name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', status: 'Active', initials: 'MC' },
    { id: 4, name: 'David Lee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', status: 'Active', initials: 'DL' },
    { id: 5, name: 'Maria Garcia', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', status: 'Active', initials: 'MG' },
    { id: 6, name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face', status: 'Active', initials: 'JW' }
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

  // Real chat messages - like iMessage group chat
  const chatMessages = [
    { 
      id: 1, 
      author: 'Emma Rodriguez', 
      initials: 'ER',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', 
      message: 'Just crushed a 5.2 mile run! Who else is feeling the Friday energy? 💪', 
      time: '2 hours ago',
      reactions: [{ emoji: '❤️', count: 5 }, { emoji: '🔥', count: 3 }]
    },
    { 
      id: 2, 
      author: 'Sarah Johnson', 
      initials: 'SJ',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', 
      message: 'Crushed my fastest mile today: 6:25! Who else is pushing for PRs this week? ⚡', 
      time: '5 hours ago',
      reactions: [{ emoji: '⚡', count: 8 }, { emoji: '👏', count: 4 }]
    },
    { 
      id: 3, 
      author: 'Mike Chen', 
      initials: 'MC',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', 
      message: 'Morning run done! 4.8 miles through the park. Coffee time ☕', 
      time: '8 hours ago',
      reactions: [{ emoji: '☕', count: 6 }]
    },
    { 
      id: 4, 
      author: 'David Lee', 
      initials: 'DL',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', 
      message: 'Who\'s running tomorrow at 6am? Let\'s meet at the usual spot!', 
      time: '12 hours ago',
      reactions: [{ emoji: '👍', count: 7 }]
    },
    { 
      id: 5, 
      author: 'Maria Garcia', 
      initials: 'MG',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', 
      message: 'Count me in! See you all at the trailhead 🏃‍♀️', 
      time: '11 hours ago',
      reactions: [{ emoji: '❤️', count: 3 }]
    },
    { 
      id: 6, 
      author: 'James Wilson', 
      initials: 'JW',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face', 
      message: 'I\'m down! Bringing the energy tomorrow morning 🔥', 
      time: '10 hours ago',
      reactions: [{ emoji: '🔥', count: 4 }]
    }
  ];

  // Next run info
  const nextRun = {
    date: 'Tomorrow',
    time: '6:00 AM',
    location: 'Trailhead Park',
    attendees: 5,
    confirmed: ['Emma Rodriguez', 'Sarah Johnson', 'Mike Chen', 'David Lee', 'Maria Garcia']
  };

  const isAdmin = true;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/athlete-home')} className="text-gray-600 hover:text-gray-800">
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
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Return to Athlete Home
              </button>
              {isAdmin && (
                <button 
                  onClick={() => navigate('/runcrew-settings')}
                  className="text-gray-600 hover:text-gray-900 font-medium text-sm"
                >
                  Crew Settings
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Crew Header - iMessage style */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3 mb-3">
            {/* Member avatars */}
            <div className="flex -space-x-2">
              {crewMembers.slice(0, 6).map((member) => (
                <div key={member.id} className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{crew.name}</h1>
          <p className="text-sm text-gray-500">{crew.members} members</p>
        </div>
      </div>

      {/* Main Content - Chat Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Chat Feed (2 columns on large screens) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-280px)] flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Date separator */}
                <div className="text-center">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today</span>
                </div>

                {chatMessages.map((msg) => (
                  <div key={msg.id} className="flex items-start space-x-2">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 overflow-hidden">
                        {msg.avatar ? (
                          <img src={msg.avatar} alt={msg.author} className="w-full h-full object-cover" />
                        ) : (
                          msg.initials
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-semibold text-gray-900">{msg.author}</span>
                        <span className="text-xs text-gray-500">·</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <div className="relative inline-block">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-md">
                          <p className="text-gray-900 text-sm">{msg.message}</p>
                        </div>
                        {/* Reactions */}
                        {msg.reactions && msg.reactions.length > 0 && (
                          <div className="flex items-center space-x-1 mt-1 ml-2">
                            {msg.reactions.map((reaction, idx) => (
                              <span key={idx} className="text-xs bg-white rounded-full px-2 py-0.5 border border-gray-200 flex items-center space-x-1">
                                <span>{reaction.emoji}</span>
                                <span className="text-gray-600">{reaction.count}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input - iMessage style */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Text Message"
                    className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Next Run */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3">Next Run</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{nextRun.date}</p>
                    <p className="text-sm text-gray-600">{nextRun.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-600">{nextRun.location}</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">{nextRun.attendees} Going</p>
                  <div className="flex -space-x-2 mb-2">
                    {crewMembers.slice(0, 5).map((member) => (
                      <img
                        key={member.id}
                        src={member.avatar}
                        alt={member.name}
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm">
                    I'm Going
                  </button>
                </div>
              </div>
            </div>

            {/* Who's Here */}
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
              <h3 className="font-bold text-gray-900 mb-4">Leaderboard</h3>
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
                        {index + 1}
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
