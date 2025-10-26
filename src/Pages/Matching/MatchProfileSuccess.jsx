import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaRunning, FaUsers, FaHandshake } from 'react-icons/fa';

const MatchProfileSuccess = () => {
  const navigate = useNavigate();

  const handleFindMatches = () => {
    navigate('/find');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="GoFast" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900 ml-3">GoFast</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white rounded-t-3xl -mt-4 relative z-10 min-h-screen">
        <div className="p-8 text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaCheck className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Complete!</h1>
            <p className="text-gray-600">
              Great job! Your running profile is all set up.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We'll find your matches</h3>
                  <p className="text-sm text-gray-600">Based on your pace, goals, and running style</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Browse runner profiles</h3>
                  <p className="text-sm text-gray-600">See who's available in your area and schedule</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Connect & run together</h3>
                  <p className="text-sm text-gray-600">Send invites, chat, and start building your running crew</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Preview */}
          <div className="bg-orange-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Profile Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {localStorage.getItem('runnerPreferences') ? JSON.parse(localStorage.getItem('runnerPreferences')).pace || '--' : '--'}
                </div>
                <div className="text-gray-600">Pace per mile</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {localStorage.getItem('runnerPreferences') ? JSON.parse(localStorage.getItem('runnerPreferences')).distance || '--' : '--'}
                </div>
                <div className="text-gray-600">Preferred distance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {localStorage.getItem('runnerPreferences') ? JSON.parse(localStorage.getItem('runnerPreferences')).timePreference || '--' : '--'}
                </div>
                <div className="text-gray-600">Run time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {localStorage.getItem('runnerPreferences') ? JSON.parse(localStorage.getItem('runnerPreferences')).goalRace || '--' : '--'}
                </div>
                <div className="text-gray-600">Goal race</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleFindMatches}
            className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
          >
            <FaRunning className="w-5 h-5" />
            <span>Go Find Matches</span>
          </button>
          
          <p className="text-gray-500 text-sm mt-4">
            Ready to connect with runners who match your style!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileSuccess;
