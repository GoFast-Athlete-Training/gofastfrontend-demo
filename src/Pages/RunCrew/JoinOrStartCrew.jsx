import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinOrStartCrew = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('join');
  const [joinCode, setJoinCode] = useState('');
  const [crewName, setCrewName] = useState('');

  const handleJoinCrew = () => {
    if (!joinCode.trim()) {
      alert('Please enter a join code');
      return;
    }
    // Simulate joining crew
    alert(`Joining crew with code: ${joinCode}`);
    navigate('/crew-dashboard');
  };

  const handleStartCrew = () => {
    if (!crewName.trim()) {
      alert('Please enter a crew name');
      return;
    }
    // Simulate creating crew
    const newJoinCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    alert(`Crew created! Join code: ${newJoinCode}`);
    navigate('/crew-dashboard');
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
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join or Start a Run Crew
          </h1>
          <p className="text-xl text-gray-600">
            Connect with your running community
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('join')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'join'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Join Crew
            </button>
            <button
              onClick={() => setActiveTab('start')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'start'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Start Crew
            </button>
          </div>
        </div>

        {/* Join Crew Tab */}
        {activeTab === 'join' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join a Run Crew</h2>
              <p className="text-gray-600">Enter the join code you received from a crew member</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Join Code</label>
                <input
                  type="text"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  placeholder="e.g., ABC123"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-center text-2xl font-mono tracking-widest"
                />
              </div>

              <button
                onClick={handleJoinCrew}
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors"
              >
                Join Crew
              </button>
            </div>
          </div>
        )}

        {/* Start Crew Tab */}
        {activeTab === 'start' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Start a Run Crew</h2>
              <p className="text-gray-600">Create your own running group and invite others</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Crew Name</label>
                <input
                  type="text"
                  value={crewName}
                  onChange={(e) => setCrewName(e.target.value)}
                  placeholder="e.g., Morning Warriors"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <button
                onClick={handleStartCrew}
                className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors"
              >
                Start Crew
              </button>
            </div>
          </div>
        )}

        {/* How it Works */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">How Run Crews Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="font-bold text-gray-900 mb-2">Join or Create</h4>
              <p className="text-sm text-gray-600">Use a join code to join an existing crew or create your own</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-bold text-gray-900 mb-2">Share & Invite</h4>
              <p className="text-sm text-gray-600">Share your join code with friends to build your crew</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏃‍♂️</div>
              <h4 className="font-bold text-gray-900 mb-2">Run Together</h4>
              <p className="text-sm text-gray-600">Coordinate runs, track progress, and stay accountable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOrStartCrew;
