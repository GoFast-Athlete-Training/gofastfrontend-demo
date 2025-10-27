import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindRunningClubs = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState('');

  const runningClubs = [
    {
      id: 1,
      name: 'Capital Striders',
      location: 'Arlington, VA',
      logo: '🏃‍♂️',
      color: 'bg-yellow-100',
      members: 85,
      vibe: 'Competitive',
      nextRun: 'Tomorrow, 7:00 AM'
    },
    {
      id: 2,
      name: 'DC Road Runners',
      location: 'Washington, DC',
      logo: '🏛️',
      color: 'bg-blue-100',
      members: 120,
      vibe: 'Social',
      nextRun: 'Saturday, 8:00 AM'
    },
    {
      id: 3,
      name: 'Potomac River Runners',
      location: 'Georgetown, DC',
      logo: '🌊',
      color: 'bg-green-100',
      members: 95,
      vibe: 'Chill',
      nextRun: 'Sunday, 9:00 AM'
    },
    {
      id: 4,
      name: 'National Mall Striders',
      location: 'Downtown DC',
      logo: '🏛️',
      color: 'bg-orange-100',
      members: 150,
      vibe: 'All Paces',
      nextRun: 'Friday, 6:30 PM'
    }
  ];

  const handleClubClick = (club) => {
    navigate(`/running-crew/${club.id}`);
  };

  const handleSubmitGroup = () => {
    alert('Submit a Group feature coming soon!');
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

      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DC Running Clubs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover running clubs in the DC area. Join a club, show up to a meetup, and <span className="text-orange-600 font-bold">GoFast</span> together.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Search by location..."
                className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hydration Status */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-900">Live Data</span>
            <span className="text-sm text-blue-700">• Synced from local running clubs and meetup groups</span>
          </div>
        </div>
      </div>

      {/* Running Clubs Grid */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {runningClubs.map((club) => (
            <div
              key={club.id}
              onClick={() => handleClubClick(club)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 ${club.color} rounded-full flex items-center justify-center`}>
                  <span className="text-2xl">{club.logo}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{club.name}</h3>
                  <p className="text-gray-600 mb-2">{club.location}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <span>👥</span>
                      <span>{club.members}+ Members</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🏃‍♂️</span>
                      <span>{club.nextRun}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {club.vibe}
                    </span>
                    <div className="text-orange-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Your Club CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Don't see your club?</h3>
          <p className="text-gray-600 mb-4">
            Add your running club to help others discover it!
          </p>
          <button
            onClick={handleSubmitGroup}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Add Your Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindRunningClubs;
