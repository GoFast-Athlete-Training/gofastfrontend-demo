import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaUsers, FaPlus } from 'react-icons/fa';

const RunCrewJoin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [inviteCode, setInviteCode] = useState(searchParams.get('code') || '');

  const handleJoinCrew = () => {
    if (!inviteCode.trim()) {
      alert('Please enter an invite code');
      return;
    }
    
    // For demo purposes, simulate joining a crew
    localStorage.setItem('joinedCrew', JSON.stringify({
      code: inviteCode,
      crewName: 'Morning Warriors',
      joinedAt: new Date().toISOString()
    }));
    
    navigate('/run-crew-join-success');
  };

  const handleStartCrew = () => {
    navigate('/connect');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-6 h-6 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">RunCrew</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Join Your Running Crew
          </h1>
          <p className="text-gray-600 mb-8">
            Enter your invite code to join your friends' crew
          </p>

          {/* Invite Code Form */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invite Code
                </label>
                <input 
                  type="text" 
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="e.g., runningfoolsofarlington"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                />
              </div>
              
              <button 
                onClick={handleJoinCrew}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <FaUsers className="w-5 h-5" />
                <span>Join Crew</span>
              </button>
            </div>
          </div>

          {/* Alternative Option */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't have a code?</p>
            <button
              onClick={handleStartCrew}
              className="w-full bg-white border-2 border-orange-200 text-gray-900 py-4 rounded-xl font-bold text-lg hover:border-orange-400 transition-colors flex items-center justify-center space-x-2"
            >
              <FaPlus className="w-5 h-5" />
              <span>Start Your Own Crew</span>
            </button>
          </div>

          {/* Demo Info */}
          <div className="mt-8 bg-orange-50 rounded-xl p-4">
            <p className="text-sm text-orange-700">
              <strong>Demo:</strong> Try code "runningfoolsofarlington" to join the Morning Warriors crew!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunCrewJoin;
