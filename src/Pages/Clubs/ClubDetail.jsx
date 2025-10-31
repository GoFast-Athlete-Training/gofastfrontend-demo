import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RunningCrewDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isJoined, setIsJoined] = useState(false);

  // Mock crew data
  const crew = {
    id: 1,
    name: 'Clarendon Run Club',
    location: 'Arlington, VA',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Meet at Northside Social every Thursday at 6:30 PM. All paces welcome. Post-run hangs encouraged. Come for the run, stay for the community.',
    members: 120,
    vibe: 'Chill but Consistent',
    nextRun: 'Thursday, 6:30 PM',
    meetingLocation: 'Northside Social, Arlington',
    pace: 'All Paces Welcome',
    distance: '3-5 miles',
    organizer: 'Sarah Johnson',
    established: '2020'
  };

  const upcomingRuns = [
    {
      id: 1,
      date: 'Tomorrow',
      time: '7:00 AM',
      location: 'Roosevelt Island',
      distance: '5K',
      participants: 12
    },
    {
      id: 2,
      date: 'Thursday',
      time: '6:30 PM',
      location: 'Northside Social',
      distance: '3-5 miles',
      participants: 25
    },
    {
      id: 3,
      date: 'Saturday',
      time: '8:00 AM',
      location: 'Mount Vernon Trail',
      distance: '10K',
      participants: 18
    }
  ];

  const handleJoinGroup = () => {
    if (isJoined) {
      setIsJoined(false);
      alert('Left the group');
    } else {
      setIsJoined(true);
      alert('Joined the group! Welcome to Clarendon Run Club!');
    }
  };

  const handleChat = () => {
    navigate(`/group-chat/${crew.id}`);
  };

  const handleViewMembers = () => {
    navigate(`/group-members/${crew.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-800">
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

      {/* Crew Profile */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <img
              src={crew.image}
              alt={crew.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{crew.name}</h1>
            <p className="text-gray-600 mb-6">{crew.location}</p>
            
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👥</span>
                <span className="font-medium">{crew.members}+ Members</span>
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                {crew.vibe}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crew Description */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About This Crew</h2>
          <p className="text-gray-700 mb-4">{crew.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏃‍♂️</span>
              <div>
                <div className="font-medium text-gray-900">Next Run</div>
                <div className="text-sm text-gray-600">{crew.nextRun}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-medium text-gray-900">Meeting Location</div>
                <div className="text-sm text-gray-600">{crew.meetingLocation}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⏱️</span>
              <div>
                <div className="font-medium text-gray-900">Pace</div>
                <div className="text-sm text-gray-600">{crew.pace}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📏</span>
              <div>
                <div className="font-medium text-gray-900">Distance</div>
                <div className="text-sm text-gray-600">{crew.distance}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Runs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Runs</h2>
          <div className="space-y-4">
            {upcomingRuns.map((run) => (
              <div key={run.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">🏃‍♂️</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{run.date} at {run.time}</div>
                    <div className="text-sm text-gray-600">{run.location} • {run.distance}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{run.participants} going</div>
                  <button className="text-orange-600 text-sm font-medium hover:text-orange-800">
                    Join Run
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleJoinGroup}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
              isJoined
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            {isJoined ? 'Leave Group' : 'Join this group'}
          </button>
          
          {isJoined && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleChat}
                className="bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                💬 Group Chat
              </button>
              <button
                onClick={handleViewMembers}
                className="bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
              >
                👥 Members
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RunningCrewDetail;
